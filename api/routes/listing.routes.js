import express from "express";
import {
  createlisting,
  deletelisting,
  updateListing,
  getListing,
  getListings,
} from "../controllers/listing.controller.js";
import { verifyToken } from "../utils/vefifyUser.js";

const listingroutes = express.Router();

listingroutes.post("/create", verifyToken, createlisting);
listingroutes.delete("/delete/:id", verifyToken, deletelisting);
listingroutes.post("/update/:id", verifyToken, updateListing);
listingroutes.get("/get/:id", getListing);
listingroutes.get("/get", getListings); //this is for search

export default listingroutes;
