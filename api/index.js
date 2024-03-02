import express from "express";
const app = express();
import cors from "cors";
import mongoose from "mongoose";
import userRouter from "./routes/user.route.js";
import authRouter from "./routes/auth.route.js";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
app.use(express.json());
app.use(cookieParser());
import User from "./model/user.model.js";
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
