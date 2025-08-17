const express = require("express");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const hpp = require("hpp");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const dotENV = require("dotenv");
const router = require("./src/routes/api");

dotENV.config();

const app = new express();

app.use(cookieParser());
app.use(cors());
app.use(helmet());
app.use(mongoSanitize());
app.use(hpp());
app.use(express.json({ limit: "10mb" }));
app.use(express.urlencoded({ limit: "10mb" }));

// Database connection
let url =
  "mongodb+srv://rimelchowdhury01:r1LiA19v5WnM8iIB@portfolio.s9hxl0x.mongodb.net/lariv?retryWrites=true&w=majority&appName=portfolio";
let option = {
  user: process.env.DB_USER,
  pass: process.env.DB_PASS,
  autoIndex: true,
  serverSelectionTimeoutMS: 5000,
};

mongoose
  .connect(url)
  .then(() => {
    console.log("Database connected successfully");
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });

// Rate limiting
const limiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 100, // Limit each IP to 100 requests per windowMs
  message: "Too many requests from this IP, please try again later.",
});

app.use(limiter);

// api end point tag
app.use("/api/v1", router);

app.use(express.static("client"));
app.use("/api/v1/get-file", express.static("uploads"));

module.exports = app;
