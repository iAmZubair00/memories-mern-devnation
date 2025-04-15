import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import postRoutes from "./routes/post.js";
import authRouter from "./routes/auth.route.js";
import dotenv from "dotenv/config";
import passport from "passport";
import { jwtStrategy } from "./config/passport.js";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// jwt authentication
app.use(passport.initialize());
passport.use('jwt', jwtStrategy);

app.use("/posts", postRoutes);
app.use(authRouter)

const CONNECTION_URL = process.env.DB_CONNECTION
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`server running at PORT ${PORT}`))
  )
  .catch((err) => console.log(`${err} server did not connect`));
