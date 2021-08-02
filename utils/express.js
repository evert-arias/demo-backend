import express from "express";
import morgan from "morgan";
import helmet from "helmet";
import rateLimit from "express-rate-limit";
import userRouter from "../routes/userRoutes.js";

const app = express();

const limiter = rateLimit({
  max: 10,
  windowMs: 60 * 60 * 1000,
  message: "Too many requests from this IP, please try again later.",
});

app.use(helmet());

app.use(morgan("dev"));

app.use('/api', limiter);

app.use("/api/v1/users", userRouter);

export { app };
