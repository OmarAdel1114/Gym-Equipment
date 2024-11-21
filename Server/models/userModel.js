const mongoose = require("mongoose");
const validator = require("validator");
const Product = require("./productModel");

const userSchema = new mongoose.Schema({
  firstName: { //
    type: String,
    required: [true,"First name is required"],
    unique: false,
  },
  lastName: {//
    type: String,
    required: [true,"Last name is required"],
    unique: false,
  },
  userName: {
    type: String,
    required: [true, "Username is required"],//
    unique: [true, "Username is not available"], //
  },
  email: {
    type: String,
    required: [true, "Email is required"],//
    unique: [true,"This Email is already signed up"],//
    lowerCase: true,
    validate: [validator.isEmail, "Must be a valid Email"],
  },
  password: {
    type: String,
    required: true,
    minlength: [6, "at least 6 characters"],
  },
  createdAt: {
    type: Date,
    default: () => Date.now(),
    immutable: true,
  },
  role: {
    type: String,
    enum: ["Admin", "User"],
    default: "User",
  },
  refreshToken: {
    type: String,
  },
  reviews: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Review", // Reference to the Review model
    },
  ],
});

module.exports = mongoose.model("users", userSchema);
