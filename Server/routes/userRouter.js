const express = require("express");
const router = express.Router();
router.use(express.json());
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
require("dotenv").config();
const User = require("../models/userModel");
const verifyToken = require("../middleware/auth.middleware");

// get all users
router.get("/", verifyToken, async (req, res) => {
  try {
    // getting all users
    const users = await User.find({});
    res.json({ Status: "Success", data: { users } });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: error.message });
  }
});

// register new user
router.post("/register", async (req, res) => {
  try {
    // importing user model
    const { firstName, lastName, userName, email, password, createdAt, role } =
      req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      firstName: firstName,
      lastName: lastName,
      userName: userName,
      email: email,
      password: hashedPassword,
      createdAt: createdAt,
      role: role,
    });

    const token = await jwt.sign({ Id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    // Saving the user in the database
    const newUser = await user.save();

    res.status(201).json({
      status: "User Registered successfully",
      data: { token, newUser },
    });
  } catch (error) {
    // Log and handle registration errors
    console.error(error);
    res.status(400).json({ message: err.message });
  }
});

// Login
router.post("/login", async (req, res) => {
  try {
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });

    const matchedPassword = await bcrypt.compare(password, user.password);

    if (!matchedPassword || !user) {
      return res.status(401).json("Authentication failed");
    }
    //generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });
    res.status(200).json({ Status: "Successful Login", data: { token, user } });
  } catch (error) {
    res.status(500).json("login failed", error);
    console.log(error);
  }
});

module.exports = router;
