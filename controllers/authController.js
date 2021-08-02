import jwt from "jsonwebtoken";
import { promisify } from "util";
import crypto from "crypto";
import User from "../model/userModel.js";
import AppError from "../utils/AppError.js";

// sign token
const signToken = (id) => {
  jwt.sign({ id }, process.env.JWT_SECRET_KEY, {
    expiresIn: process.env.JWT_EXPIRATION_TIME,
  });
};

// signup
const signUp = async (req, res, next) => {
  try {
    const newUser = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password,
      passwordConfirm: req.body.passwordConfirm,
    });

    const token = signToken(newUser._id);

    res.cookie("jwt", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production" ? true : false, // set to true when in production
      expires: new Date(
        Date.now() +
          process.env.JWT_COOKIE_EXPIRATION_TIME * 24 * 60 * 60 * 1000
      ),
    });
    res.status(201).json({
      status: "sucess",
      data: {
        token,
        user: newUser,
      },
    });
  } catch (error) {
    next(new AppError(error.message));
  }
};

// login
const login = (req, res, next) => {
  try {
    res.status(201).json({
      status: "sucess",
      data: {
        // token,
        // user: newUser,
      },
    });
  } catch (error) {
    next(new AppError(error.message));
  }
};

export { signUp, login };
