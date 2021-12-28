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

const CONNECTION_URL =
  "mongodb://user1:dJYqHB0CAbXStVTd@codecamp-mongo-course-shard-00-00.spl74.mongodb.net:27017,codecamp-mongo-course-shard-00-01.spl74.mongodb.net:27017,codecamp-mongo-course-shard-00-02.spl74.mongodb.net:27017/db1?ssl=true&replicaSet=atlas-480jj6-shard-0&authSource=admin&retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () => console.log(`server running at PORT ${PORT}`))
  )
  .catch((err) => console.log(`${err} server did not connect`));
