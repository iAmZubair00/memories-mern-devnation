import mongoose from "mongoose";
import app from "./server.js";
import config from "./config/config.js";

mongoose
  .connect(config.dbConnection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(config.port, () => console.log(`server running at PORT ${config.port}`))
  )
  .catch((err) => console.log(`${err} server did not connect`));
