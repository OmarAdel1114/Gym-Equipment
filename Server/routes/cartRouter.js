const express = require("express");
const router = express.Router();
router.use(express.json());
const mongoose = require("mongoose");
const Cart = require("../models/cartModel");

const verifyToken = require("../middleware/auth.middleware");

router.get("/:id", verifyToken, async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 3; // Default to 3 products per page
    const skipCount = (page - 1) * perPage;

    const id = req.params.id;

    const cart = await Cart.findById({ _id: id }, { __v: 0 })
      .populate("cartOwner", {
        __v: 0,
        password: 0,
        firstName: 0,
        lastName: 0,
        createdAt: 0,
      })
      .populate("cartProducts", { __v: 0 })
      .skip(skipCount)
      .limit(perPage);

    res.status(200).json({ Status: "Success", data: { cart } });
  } catch (error) {
    console.error("cannot get the Cart details:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

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
