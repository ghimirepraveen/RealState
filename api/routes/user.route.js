import express from "express";
import { test } from "../controllers/user.controler.js";
import { updateUser, deleteUser } from "../controllers/user.controler.js";

import { verifyToken } from "../utils/vefifyUser.js";
const router = express.Router();

router.get("/test", test);
router.post("/update/:id", verifyToken, updateUser);
router.delete("/delete/:id", verifyToken, deleteUser);
export default router;
