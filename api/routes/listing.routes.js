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
listingroutes.get("/get/:id", getListing);
listingroutes.get("/get", getListings);

listingroutes.use(verifyToken);
listingroutes.post("/create", createlisting);
listingroutes.delete("/delete/:id", deletelisting);
listingroutes.post("/update/:id", updateListing);

export default listingroutes;
