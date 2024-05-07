import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routes/user.routes.js";
import authRouter from "./routes/auth.routes.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import listingRouter from "./routes/listing.routes.js";
app.use(express.json());
app.use(cookieParser());

import Listing from "../api/model/listing.model.js";
import User from "./model/user.model.js";
const app = express();
app.use(express.json());
app.use(cookieParser());
dotenv.config();
app.use(
  cors({
    origin: "http://localhost:5173",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
    optionsSuccessStatus: 204,
  })
);

mongoose
  .connect(process.env.DB)
  .then(() => {
    console.log("Database connected succesfully");
  })
  .catch((error) => {
    console.log(error);
  });

app.use("/api/user", userRouter);
app.use("/api/auth", authRouter);
app.use("/api/listing", listingRouter);
app.use((err, req, res, next) => {
  const statusCode = err.statusCode || 500;
  const message = err.message || "internal server error";
  return res.status(statusCode).json({
    success: false,
    statusCode,
    message,
  });
});

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`\n🫡 Handle with care, pretty codes ahead! \n`);
  console.log(`ctrl + c to stop server`);
  console.log(`server is running on port ${PORT}`);
});
