const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  prodTitle: {
    type: String,
    required: [true, "Title is required"],
  },
  price: {
    type: float,
    required: true,
  },
  brand: {
    type: String,
    enum: ["Quardo", "Garlando"],
    default: "Garlando",
  },
  color: {
    type: String,
  },
  photo: {
    type: String,
  },
});
