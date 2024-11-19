const express = require("express");
const router = express.Router();
router.use(express.json());
const verifyToken = require("../middleware/auth.middleware");
const upload = require("../middleware/upload");
const productController = require("../Controller/productController");

//Get all products
router.get("/", productController.getAllProducts);
//Get product by Id
router.get("/:id", productController.getProductById);
// add a new product for admins only
router.post(
  "/add",
  verifyToken,
  upload.array("productImage", 5),
  productController.addProduct
);
// delete a product for admins only
router.delete("/:id", verifyToken, productController.deleteProduct);
// update a product for admins only
router.patch("/:id", verifyToken, productController.productRating);
// Add a star rating for a product
router.post("/rate/:id", verifyToken, productController.productRating);

module.exports = router;
