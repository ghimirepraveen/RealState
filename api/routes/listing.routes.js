import express from "express";
import {
  createlisting,
  deletelisting,
  updateListing,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/vefifyUser.js";

const listingroutes = express.Router();

listingroutes.post("/create", verifyToken, createlisting);
listingroutes.delete("/delete/:id", verifyToken, deletelisting);
listingroutes.post("/update/:id", verifyToken, updateListing);

export default listingroutes;
