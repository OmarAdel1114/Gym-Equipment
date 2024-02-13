const express = require("express");
const router = express.Router();
router.use(express.json());
const mongoose = require("mongoose");
const User = require("../models/userModel");

// get all users
router.get("/", async (req, res) => {
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
    const user = new User({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      email: req.body.email,
      password: req.body.password,
      createdAt: req.body.createdAt,
    });
    // Saving the user in the database
    const newUser = await user.save();

    res.status(201).json({ status: "Success", data: { newUser } });
  } catch (error) {
    // Log and handle registration errors
    console.error(error);
    res.status(400).json({ message: err.message });
  }
});


module.exports = router;
