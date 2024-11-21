const mongoose = require("mongoose");
const User = require("../models/userModel");
const { MongoMemoryServer } = require("mongodb-memory-server");
require("dotenv").config();

let mongoServer;

describe("Tests for User Model", () => {
  beforeAll(async () => {
    mongoServer = await MongoMemoryServer.create();
    const mongoUri = mongoServer.getUri();
    await mongoose.connect(mongoUri);
  });
  afterAll(async () => {
    await mongoose.disconnect();
    await mongoServer.stop();
  });

  it("should throw a validation error if 'firstName' is not provided", async () => {
    const user = new User({
      lastName: "sameh",
      userName: "Test Name",
      email: "test@test.com",
      password: "NewPassword",
    });
    await expect(user.validate()).rejects.toThrow("First name is required");
  });
  it("should throw a validation error if 'lastName' is not provided", async () => {
    const user = new User({
      firstName: "sameh",
      userName: "Test Name",
      email: "test@test.com",
      password: "NewPassword",
    });
    await expect(user.validate()).rejects.toThrow("Last name is required");
  });
  it("should throw a validation error if 'userName' is not provided", async () => {
    const user = new User({
      firstName: "sameh",
      lastName: "Test",
      email: "test@test.com",
      password: "NewPassword",
    });
    await expect(user.validate()).rejects.toThrow("Username is required");
  });
  it("should throw a validation error if 'userName' is Duplicated", async () => {
    const user1 = new User({
      firstName: "Sameh",
      lastName: "Test",
      userName: "testUser",
      email: "test1@test.com",
      password: "Password123",
    });
    await user1.save();
    const user2 = new User({
      firstName: "Sameh",
      lastName: "Test2",
      userName: "testUser",
      email: "test2@test.com",
      password: "Password456",
    });
    await expect(user2.save()).rejects.toThrow(/duplicate key error/);
  });
  it("should throw a validation error if 'email' is not provided", async () => {
    const user = new User({
      firstName: "sameh",
      lastName: "Test",
      userName: "dsaadgg",
      password: "NewPassword",
    });
    await expect(user.validate()).rejects.toThrow("Email is required");
  });
  it("should throw a validation error if 'email' is Duplicated", async () => {
    const user1 = new User({
      firstName: "sameh",
      lastName: "Test",
      email: "user1@email.com",
      userName: "something",
      password: "NewPassword",
    });
    await user1.save();
    const user2 = new User({
      firstName: "sameh",
      lastName: "Test",
      email: "user1@email.com",
      userName: "testUser2",
      password: "NewPassword",
    });
    await expect(user2.save()).rejects.toThrow(/duplicate key error/);
  });
  it("should throw a validation error if 'email' is not a valid format", async () => {
    const user = new User({
      firstName: "sameh",
      lastName: "Test",
      userName: "userName",
      password: "NewPassword",
      email: "invalid-email", 
    });
  
    await expect(user.validate()).rejects.toThrow("Must be a valid Email");
  });
});
