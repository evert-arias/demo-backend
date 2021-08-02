import AppError from "../utils/AppError.js";

// signup
const signUp = (req, res, next) => {
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
