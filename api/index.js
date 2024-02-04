import express from "express";
//const express = require("express");
const app = express();

import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import "dotenv/config";
import cookieParser from "cookie-parser";
app.use(express.json());
app.use(cookieParser());
import User from "./model/user.model.js";
import { error } from "console";
mongoose
  .connect(process.env.Db_connect)
  .then(() => {
    console.log("Database connected succesfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);

app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

app.listen(3000, () => {
  console.log("server is running on port 3000");
});
