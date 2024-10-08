const express = require("express");
const app = express();
app.use(express.json());
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();
const logger = require("./config/logger");

const userRoutes = require("./routes/userRouter");
const productRoutes = require("./routes/productRouter");
const cartRoutes = require("./routes/cartRouter");

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log(`MongoDB Server Started `);
  })
  .catch((err) => logger.error("Could not connect to MongoDB...", err));
const port = process.env.PORT;

app.use(cors());
app.use("/api/users", userRoutes);
app.use("/api/products", productRoutes);
app.use("/api/cart", cartRoutes);

app.listen(port, () => {
  console.log(`Listening on Port ${port}`);
});
