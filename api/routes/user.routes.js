import express from "express";
import { test } from "../controllers/user.controler.js";
import {
  updateUser,
  deleteUser,
  getUserListings,
} from "../controllers/user.controler.js";

import { verifyToken } from "../utils/vefifyUser.js";
const router = express.Router();

router.use(verifyToken);
router.post("/update/:id", updateUser);
router.delete("/delete/:id", deleteUser);
router.get("/listing/:id", getUserListings);
export default router;
