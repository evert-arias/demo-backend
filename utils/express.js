import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import ExpressMongoSanitize from "express-mongo-sanitize";
import userRouter from "../routes/userRoutes.js";
import errorHandler from './errorHandler.js';

import xss from 'xss-clean';
import hpp from 'hpp';

const app = express();

const limiter = rateLimit({
  max: 10,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again later.",
});

app.use(helmet());

app.use(morgan("dev"));

app.use("/api", limiter);

app.use(express.json({ limit: "10kb" }));
// Data sanitization
app.use(ExpressMongoSanitize());
app.use(xss());

// Clenaing parameter pollution
app.use(
  hpp({
    whitelist: [
      "duration",
      "ratingsQuantity",
      "ratingsAverage",
      "difficulty",
      "price",
    ],
  })
);

app.use("/api/v1/users", userRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`can´t find ${req.originalUrl} on this server`, 404));
});

app.use(errorHandler);

export { app };
