const express = require("express");
const router = express.Router();
router.use(express.json());
require("dotenv").config();
const verifyToken = require("../middleware/auth.middleware");
const userController = require('../Controller/userController');

router.get("/", verifyToken, userController.getAllUsers );
router.post("/token",userController.tokenRefresh );
router.post("/register",userController.register);
router.post("/login",userController.login);

module.exports = router;
