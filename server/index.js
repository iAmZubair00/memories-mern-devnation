import mongoose from "mongoose";
import app from "./server.js";
import config from "./config/config.js";
import logger from "./config/logger.js";

mongoose
  .connect(config.dbConnection, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(config.port, () => logger.info(`server running at PORT ${config.port}`))
  )
  .catch((err) => logger.error(`${err} server did not connect`));
