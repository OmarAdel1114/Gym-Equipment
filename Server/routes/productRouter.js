const express = require("express");
const router = express.Router();
router.use(express.json());
const mongoose = require("mongoose");
const Product = require("../models/productModel");
const Review = require("../models/reviewModel");
const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middleware/auth.middleware");
const upload = require("../middleware/upload");
const { uploadToCloudinary } = require("../utils/cloudinary");
//Get all products
router.get("/", async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;
    const perPage = parseInt(req.query.perPage) || 3; // Default to 3 products per page
    const skipCount = (page - 1) * perPage;

    const products = await Product.find(
      {},
      { __v: 0, color: 0, publicId: 0, id: 0 }
    )
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

//Get product by Id
router.get("/:id", async (req, res) => {
  try {
    const product = await Product.findById(req.params.id, {
      __v: 0,
      publicId: 0,
    });
    if (!product) {
      res.status(404).json("Product not available");
    } else {
      res.status(200).json({ message: "Product found", data: product });
    }
  } catch (error) {
    console.error("Failed to find the product", error);
    res.status(400).json(error);
  }
});

// add a new product for admins only
router.post(
  "/add",
  verifyToken,
  upload.array("productImage", 5),
  async (req, res) => {
    try {
      const { prodTitle, price, brand, color, description } = req.body;

      if (
        !prodTitle ||
        !price ||
        !brand ||
        !color ||
        !description ||
        !req.files ||
        req.files.length === 0
      ) {
        console.log("All attributes must be provided");
      }

      // Upload all images to Cloudinary and collect their URLs and public IDs
      const imageUploadPromises = req.files.map((file) =>
        uploadToCloudinary(file.path, "product-images")
      );
      const imageUploadResults = await Promise.all(imageUploadPromises);

      // Extract URLs and public IDs from the upload results
      const imageUrls = imageUploadResults.map((result) => result.url);
      const publicIds = imageUploadResults.map((result) => result.public_id);

      const product = new Product({
        prodTitle,
        price,
        brand,
        color,
        description,
        imageUrl: imageUrls,
        publicId: publicIds,
      });

      const newProduct = await product.save();

      res.status(201).json({ Status: "Success", data: { newProduct } });
    } catch (error) {
      console.error("Failed to add new Product", error);
      res
        .status(500)
        .json({ error: "Failed to add new Product", message: error.message });
    }
  }
);

// delete a product for admins only
router.delete("/:id", verifyToken, async (req, res) => {
  try {
    const id = req.params.id;

    const product = await Product.findById({ _id: id });

    if (!product) {
      res.status(404).json("Product not available");
    } else {
      await Product.deleteOne(product);
      res
        .status(200)
        .json({ message: "product removed successfully", data: product });
    }
  } catch (error) {
    console.error("Failed to delete the product", error);
    res.status(400).json(error);
  }
});

// update a product for admins only
router.patch("/:id", verifyToken, async (req, res) => {
  try {
    const { prodTitle, price, brand, color, photo } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
      prodTitle,
      price,
      brand,
      color,
      photo,
    });
    if (!updatedProduct) {
      return res.status(404).json({ error: "product not found" });
    }
    res
      .status(201)
      .json({ message: "Product updated successfully", data: updatedProduct });
  } catch (error) {
    console.error(error);
    res.status(500).json("internal server error");
  }
});

// Add a star rating for a product
router.post("/rate/:id", verifyToken, async (req, res) => {
  try {
    const { stars, comment } = req.body; // Expects 'stars' to be a number from 1 to 5
    const userId = req.userId; // Assume user ID is available in the request
    console.log("User ID from middleware:", userId); // Log userId
    // Validate the stars input
    if (stars == null || typeof stars !== "number" || stars < 1 || stars > 5) {
      return res
        .status(400)
        .json({ message: "Stars must be a number between 1 and 5." });
    }

    // Find the product by ID
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    // Use the $inc operator to increment the stars count for the given rating level
    const update = { [`stars.${stars}`]: 1 };

    // Update the product's rating using the findOneAndUpdate method
    const updatedProduct = await Product.findByIdAndUpdate(
      req.params.id,
      { $inc: update },
      { new: true }
    );

    // If a comment is provided, create a review
    if (comment) {
      // Create a new review
      const review = new Review({
        userId,
        productId: req.params.id,
        rating: stars,
        comment,
      });

      // Save the review
      await review.save();

      // Update the product with the new review
      await Product.findByIdAndUpdate(
        req.params.id,
        { $push: { reviews: review._id } },
        { new: true }
      );

      // Optionally, update the user with the new review
      await User.findByIdAndUpdate(
        userId,
        { $push: { reviews: review._id } },
        { new: true }
      );
    }

    res.json({
      message: "Rating and review updated successfully",
      product: updatedProduct,
    });
  } catch (err) {
    console.error("Error caught:", err.message);
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
