import Listing from "../model/listing.model.js";
import { errorHandeler } from "../utils/error.js";

export const createlisting = async (req, res, next) => {
  try {
    const listing = await Listing.create(req.body);
    return res.status(201).json(listing);
  } catch (error) {
    next(error);
  }
};

export const deletelisting = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(errorHandeler(401, "Listing Not Found "));
  }
  if (req.user.id !== listing.userRef) {
    return next(errorHandeler(401, "tou can only delete your own listing "));
  }
  try {
    await Listing.findByIdAndDelete(req.params.id);
    res.status(200).json("Listing is deleted Succesfully ");
  } catch (error) {
    next(error);
  }
};

export const updateListing = async (req, res, next) => {
  const listing = await Listing.findById(req.params.id);
  if (!listing) {
    return next(errorHandeler(404, "listing not found "));
  }
  if (req.user.id !== listing.userRef) {
    return next(errorHandeler(401, "You can only update your own Listing "));
  }
  try {
    const updateListing = await Listing.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
    res.status(200).json(updateListing);
  } catch (error) {
    next(error);
  }
};
