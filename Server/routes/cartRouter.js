const express = require("express");
const router = express.Router();
router.use(express.json());
const mongoose = require("mongoose");
const Cart = require("../models/cartModel");

const verifyToken = require("../middleware/auth.middleware");

router.post("/add", verifyToken, async (req, res) => {
  try {
    const { cartOwner, cartProducts } = req.body;

    const cart = new Cart({
      cartOwner,
      cartProducts,
    });

    const newCart = await cart.save();
    res.status(201).json({ Status: "Success", data: { newCart } });
  } catch (error) {
    console.log(req.body);

    console.error("Failed", error);
    res.status(500).json({ error: "Failed", message: error.message });
  }
});

module.exports = router;
