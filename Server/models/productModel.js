const mongoose = require("mongoose");
const { ratings } = require("stars-schema");

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

  //description: String done
  // rating out of five done
  // if possible add comments
  // check if possible to add more than one image to the same products done
});

productSchema.plugin(ratings, { name: "stars", levels: [1, 2, 3, 4, 5] });

module.exports = mongoose.model("products", productSchema);
