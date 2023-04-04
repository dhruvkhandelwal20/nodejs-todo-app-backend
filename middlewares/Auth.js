import { User } from "../models/user.js";
import jwt from "jsonwebtoken";

export const isAuthenticated = async (req, res, next) => {
  const { token } = req.cookies;

  if (!token) {
    return res.status(404).json({
      success: false,
      message: "Login First!",
    });
  }

  const decodedId = jwt.verify(token, process.env.JWT_SECRET_KEY);

  req.user = await User.findById(decodedId._id);

  next();
};
