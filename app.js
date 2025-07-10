import express from "express";
import cookieParser from "cookie-parser";

import { PORT } from "./config/env.js";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import subsRouter from "./routes/subs.routes.js";

import connectToDatabase from "./database/mongodb.js";
import errorMiddleware from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/users", userRouter);
app.use("/api/v1/subscriptions", subsRouter);
app.use(errorMiddleware);

app.get("/", (request, response) => {
  response.send("Welcome to the Subscription tracker API!");
});

app.listen(PORT, async () => {
  console.log(`Subscription API is running on http://localhost:${PORT}`);
  await connectToDatabase();
});

export default app;
