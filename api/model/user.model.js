import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Provide username"],
      unique: [true, "Provide different username"],
    },
    email: {
      type: String,
      required: [true, "Provide email"],
      unique: [true, "Provide unique email"],
    },
    password: {
      type: String,
      required: [true, "Provide password"],
    },
  },
  { timestamps: true }
);
const User = mongoose.model("User", userSchema);
export default User;
