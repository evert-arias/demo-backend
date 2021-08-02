import express from "express";
import { signUp, login } from "../controllers/authController.js";

// user related router
const router = express.Router();

// signup route
router.route("/signup").post(signUp);
// login route
router.route("/login").post(login);

export default router;
