const winston = require("winston");
require("winston-mongodb");
require("dotenv").config();
const { combine, json, timestamp } = winston.format;
const logger = winston.createLogger({
  level: "error",
  format: combine(timestamp(), json()),
  transports: [
    new winston.transports.File({ filename: "error.log" }),
    new winston.transports.MongoDB({
      level: "error",
      db: process.env.MONGO_URL,
    }),
  ],
});

module.exports = logger;
