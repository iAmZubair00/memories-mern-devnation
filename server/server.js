import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import postRouter from "./routes/post.route.js";
import authRouter from "./routes/auth.route.js";
import passport from "passport";
import { jwtStrategy } from "./config/passport.js";
import { errorHandler } from "./middlewares/error.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// jwt authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

app.use("/post", postRouter);
app.use("/auth", authRouter)

app.use(errorHandler);

export default app;