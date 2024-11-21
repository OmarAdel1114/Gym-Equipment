const mongoose = require("mongoose");
const { ratings } = require("stars-schema");

const productSchema = new mongoose.Schema({
  prodTitle: {
    type: String,
    required: [true, "Title is missing"],
  },
  price: {
    type: Number,
    float: true,
    required: [true, "Price is missing"],
    min: [1, "Price must be more than zero"],
    validate: {
      validator: function(value) {
        return !isNaN(value); // Ensures that the value is a number
      },
      message: "Price must be a valid number"},
  brand: {
    type: String,
    required: [true, "Brand is missing"],
  },
  color: {
    type: String,
    required: [true, "color is missing"],
  },
  publicId: {
    type: [String],
  },
  imageUrl: {
    type: [String],
    required: false,
  },
  description: {
    type: String,
    required: false,
  },
  reviews: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Review", // Reference to the Review model
    },
  ],
}});

productSchema.plugin(ratings, { name: "stars", levels: [1, 2, 3, 4, 5] });

module.exports = mongoose.model("products", productSchema);
