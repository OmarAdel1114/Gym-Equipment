const mongoose = require("mongoose");
const Product = require("../models/productModel");
const { MongoMemoryServer } = require("mongodb-memory-server");
require("dotenv").config();

let mongoServer;

describe("Tests for Products Model", () => {
  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();

    await mongoose.connect(mongoUri);
  });
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });
  
  it("should throw a validation error if 'prodTitle' is missing", async () => {
    const product = new Product({ price: 100, brand: "Brand", color: "Red" });
    await expect(product.validate()).rejects.toThrow("Title is missing");
  });
  it("should throw a validation error if 'price' is missing", async () => {
    const product = new Product({ prodTitle: "Test Title", brand: "Brand", color: "Red" });
    await expect(product.validate()).rejects.toThrow("Price is missing");
  });
  it("should throw a validation error if 'price' is less than zero", async () => {
    const product = new Product({ price:0,prodTitle: "Test Title", brand: "Brand", color: "Red" });
    await expect(product.validate()).rejects.toThrow("Price must be more than zero");
  });
  it("should throw a validation error if 'price' is not a valid Number", async () => {
    const product = new Product({ price:"-1",prodTitle: "Test Title", brand: "Brand", color: "Red" });
    await expect(product.validate()).rejects.toThrow(mongoose.Error.ValidationError);
  });
});
