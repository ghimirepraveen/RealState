import express from "express";
//const express = require("express");
const app = express();
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import "dotenv/config";

app.use(express.json());
mongoose
  .connect(process.env.Db_connect)
  .then(() => {
    console.log("Database connected succesfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/user", userRouter);
app.use("/api/user", authRouter);

app.listen(3000, () => {
  console.log("server is running on port 3000");
});

// B6KB7RACu0ibdD7A;
// mongodb+srv://ghimireprabin777:<password>@realstate.0caugqx.mongodb.net/?retryWrites=true&w=majority
