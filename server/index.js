import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import postRoutes from "./routes/post.js";
import dotenv from "dotenv/config";

const app = express();

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
app.use("/posts", postRoutes);

const CONNECTION_URL = process.env.MONGO_URI
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`server running at PORT ${PORT}`))
  )
  .catch((err) => console.log(`${err} server did not connect`));
