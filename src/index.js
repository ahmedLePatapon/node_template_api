const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./database");
const { PORT } = require("./config");

const startServer = async () => {
  try {
    await dbConnection();

    const app = express();

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    const baseRouter = require("./routes/router");
    app.use("/", baseRouter);

    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("**********************");
    console.log("error", error);
    console.log("**********************");
    process.exit(1);
  }
};

startServer();
