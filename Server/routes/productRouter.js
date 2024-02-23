const express = require("express");
const router = express.Router();
router.use(express.json());
const mongoose = require("mongoose");
const Product = require("../models/productModel");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/auth.middleware");

router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 3; // Default to 3 products per page
    const skipCount = (page - 1) * perPage;

    const products = await Product.find({}, { __v: 0 })
      .skip(skipCount)
      .limit(perPage);

    res.status(200).json({ Status: "Success", data: { products } });
  } catch (error) {
    console.error("Error fetching users:", error);
    res
      .status(500)
      .json({ error: "Internal Server Error", message: error.message });
  }
});

router.post("/add", verifyToken, async (req, res) => {
  try {
    const { prodTitle, price, brand, color, photo } = req.body;

    const product = new Product({
      prodTitle,
      price,
      brand,
      color,
      photo,
    });

    const newProduct = await product.save();

    res.status(201).json({ Status: "Success", data: { newProduct } });
  } catch (error) {
    console.error("Failed to add new Product", error);
    res
      .status(500)
      .json({ error: "Failed to add new Product", message: error.message });
  }
});

module.exports = router;
