const express = require("express");
const router = express.Router();
router.use(express.json());
const cartController = require('../Controller/cartController');
const verifyToken = require("../middleware/auth.middleware");


router.get("/:userId", verifyToken,cartController.getCart);
router.post("/add", verifyToken,cartController.addToCart);

module.exports = router;
