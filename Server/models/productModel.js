const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  prodTitle: {
    type: String,
    required: [true, "Title is required"],
  },
  price: {
    type: Number,
    float: true,
    required: true,
  },
  brand: {
    type: String,
    required: true,
  },
  color: {
    type: String,
    required: true,
  },
  publicId: {
    type: String,
  },
  imageUrl: {
    type: String,
    required: false,
  },
});

module.exports = mongoose.model("products", productSchema);
