import express from "express";
import {
  getMyProfile,
  userLogin,
  userLogout,
  registerUser,
} from "../controllers/user.js";
import { isAuthenticated } from "../middlewares/Auth.js";

const router = express.Router();

router.post("/new", registerUser);

router.post("/login", userLogin);

router.get("/logout", userLogout);

router.get("/me", isAuthenticated, getMyProfile);

export default router;
