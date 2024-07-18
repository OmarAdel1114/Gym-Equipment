const express = require("express");
const router = express.Router();
router.use(express.json());
const mongoose = require("mongoose");
require("dotenv").config();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const verifyToken = require("../middleware/auth.middleware");

const setRefreshTokenCookie = (res, refreshToken) => {
  res.cookie("refreshToken", refreshToken, {
    httpOnly: true,
    sameSite: "strict",
    maxAge: 365 * 24 * 60 * 60 * 1000, //1 year
  });
};

// get all users for Admins
router.get("/", verifyToken, async (req, res) => {
  try {
    // getting all users
    const users = await User.find({}, { __v: 0, password: 0 }); // Excluding __v and password fields

    res.json({ Status: "Success", data: { users } });
  } catch (error) {
    console.error("Error fetching users:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

router.post("/token", async (req, res) => {
  const { token } = req.body;
  if (!token) {
    return res.status(403).json({ error: "Access denied, token missing!" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_REFRESH_SECRET_KEY);
    const accessToken = jwt.sign(
      { id: decoded.id },
      process.env.JWT_SECRET_KEY,
      { expiresIn: "1h" }
    );
    res.status(201).json({ accessToken });
  } catch (error) {
    res.status(403).json({ error: "Invalid refresh token" });
  }
});

// register new user
router.post("/register", async (req, res) => {
  try {
    // importing user model
    const { firstName, lastName, userName, email, password, role } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const createdAt = new Date(); //This let the server create the timestamp

    const user = new User({
      firstName,
      lastName,
      userName,
      email,
      password: hashedPassword,
      createdAt,
      role,
    });

    // Generate the access token
    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    // Generate the refresh token
    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.JWT_REFRESH_SECRET_KEY,
      { expiresIn: "1y" }
    );

    user.refreshToken = refreshToken;

    // Saving the user in the database
    const newUser = await user.save();

    setRefreshTokenCookie(res, refreshToken);

    res.status(201).json({
      status: "User Registered successfully",
      data: {
        accessToken,
        newUser: {
          _id: user._id,
          userName: user.userName,
          email: user.email,
          role: user.role,
        },
      },
    });
  } catch (error) {
    // Log and handle registration errors
    console.error("Registration Failed", error);
    res
      .status(400)
      .json({ error: "Registration Failed", message: error.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    // checks if the email in the database
    if (!user) {
      return res.status(401).json("Wrong email");
    }

    // compare the sent password with the password in the database
    const matchedPassword = await bcrypt.compare(password, user.password);

    if (!matchedPassword) {
      return res.status(401).json("Wrong Password");
    }

    // Generate the access token
    const accessToken = jwt.sign({ id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    // Generate the refresh token
    const refreshToken = jwt.sign(
      { id: user._id },
      process.env.JWT_REFRESH_SECRET_KEY,
      { expiresIn: "1y" }
    );
    // Save the refresh token in the user document
    user.refreshToken = refreshToken;
    await user.save();

    setRefreshTokenCookie(res, refreshToken);

    res.status(200).json({
      Status: "Successful Login",
      data: {
        accessToken,
        user: {
          _id: user._id,
          userName: user.userName,
          email: user.email,
          role: user.role,
        },
      },
    });
  } catch (error) {
    console.log("Login failed", error);
    res.status(500).json({ error: "login failed", message: error.message });
  }
});

module.exports = router;
