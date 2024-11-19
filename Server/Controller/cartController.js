const Cart = require('../models/cartModel');
const logger = require("../config/logger");

const getCart =  async (req, res) => {
    try {
      const cart = await Cart.find({ user: req.params.userId })
        .populate({
          path: "cartProducts",
          select: "prodTitle price brand imageUrl",
        })
        .populate({
          path: "cartOwner",
          select: "userName",
        });
  
      res.status(200).json({ Status: "Success", data: { cart } });
    } catch (error) {
      logger.error("cannot get the Cart details:", error);
      res
        .status(500)
        .json({ error: "Internal Server Error", message: error.message });
    }
  }
const addToCart =  async (req, res) => {
    try {
      const { cartOwner, cartProducts } = req.body;
  
      const cart = new Cart({
        cartOwner,
        cartProducts,
      });
      const newCart = await cart.save();
  
      res.status(201).json({ Status: "Success", data: { newCart } });
    } catch (error) {
      logger.error("Failed", error);
      res.status(500).json({ error: "Failed", message: error.message });
    }
  }

module.exports= {
    getCart,
    addToCart
}