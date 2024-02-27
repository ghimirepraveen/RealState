import User from "../model/user.model.js";
import bcryptjs from "bcryptjs"; //import { errorhandeler } from "../utils/error.js";
import { errorhandeler } from "../utils/error.js";
import jwt from "jsonwebtoken";
//changin github repo
export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;
  const hashedPassword = bcryptjs.hashSync(password, 10);
  const newUser = new User({ username, email, password: hashedPassword });
  try {
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
  const { email, password } = req.body;
  try {
    const validUser = await User.findOne({ email });
    if (!validUser) return next(errorhandeler(404, "User not found"));
    const validPassword = await bcryptjs.compareSync(
      password,
      validUser.password
    );
    if (!validPassword) return errorhandeler(401, "wrong credentials!");
    const token = jwt.sign({ id: validUser._id }, process.env.jwt_salt);
    const { password: pass, ...rest } = user._doc;
    res
      .cookie("access_token", token, { httpOnly: true })
      .status(200)
      .json(rest);
  } catch (error) {
    next(error);
  }
};
