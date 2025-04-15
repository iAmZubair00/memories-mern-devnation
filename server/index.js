import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import postRouter from "./routes/post.route.js";
import authRouter from "./routes/auth.route.js";
import passport from "passport";
import { jwtStrategy } from "./config/passport.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// jwt authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

app.use("/post", postRouter);
app.use("/auth", authRouter)

const CONNECTION_URL = process.env.DB_CONNECTION
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`server running at PORT ${PORT}`))
  )
  .catch((err) => console.log(`${err} server did not connect`));
