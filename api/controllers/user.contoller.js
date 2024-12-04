import User from "../models/user.model.js";
import { errorHandler } from "../utils/error.js";
import bcryptjs from "bcryptjs";
export const test = (req, res) => {
  res.send("helloooo");
};
export const updateUser = async (req, res, next) => {
  try {
    console.log("Request received for user update:", req.params.id);

    // if (!req.user || req.user.id !== req.params.id) {

    //   return next(errorHandler(401, "Unauthorized access!"));
    // }
    if (req.body.password) {
      req.body.password = bcryptjs.hashSync(req.body.password, 10);
    }
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      {
        $set:
          // username: req.body.username,
          // email: req.body.email,
          // password: req.body.password,
          // avatar: req.body.avatar,
          req.body,
      },
      { new: true }
    );
    if (!updatedUser) {
      return next(errorHandler(404, "user not found"));
    }
    const { password, ...rest } = updatedUser._doc;
    res.status(200).json(rest);
  } catch (err) {
    console.log("error during user update:", err);

    next(err);
  }
};
