const mongoose = require("mongoose");

const cartSchema = new mongoose.Schema(
  {
    cartOwner: {
      type: mongoose.Types.ObjectId,
      ref: "users",
    },
    cartProducts: {
      type: mongoose.Types.ObjectId,
      ref: "products",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("cart", cartSchema);
