const express = require("express");
const router = express.Router();
router.use(express.json());
const mongoose = require("mongoose");
require("dotenv").config();
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const verifyToken = require("../middleware/auth.middleware");

// get all users
router.get("/", verifyToken, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 3; // Default to 3 users per page
    const skipCount = (page - 1) * perPage;

    // getting all users
    const users = await User.find({}, { __v: 0, password: 0 }) // Excluding __v and password fields
      .skip(skipCount)
      .limit(perPage);

    res.json({ Status: "Success", data: { users } });
  } catch (error) {
    console.error("Error fetching users:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
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
    // Saving the user in the database
    const newUser = await user.save();

    /* We generate the token after the user is saved the DB 
      to make sure that token is generated only for the saved users */

    const token = jwt.sign({ Id: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });

    res.status(201).json({
      status: "User Registered successfully",
      data: { token, newUser },
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
    const { userName, password } = req.body;
    const user = await User.findOne({ userName });

    // checks if the userName in the database
    if (!user) {
      return res.status(401).json("Wrong userName");
    }

    // compare the sent password with the password in the database
    const matchedPassword = await bcrypt.compare(password, user.password);

    if (!matchedPassword) {
      return res.status(401).json("Wrong Password");
    }

    //generate JWT token
    const token = jwt.sign({ userId: user._id }, process.env.JWT_SECRET_KEY, {
      expiresIn: "1h",
    });
    res.status(200).json({ Status: "Successful Login", data: { token, user } });
  } catch (error) {
    console.log("Login failed", error);
    res.status(500).json({ error: "login failed", message: error.message });
  }
});

module.exports = router;
