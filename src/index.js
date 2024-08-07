const express = require("express");
require("dotenv").config();
const { dbConnection } = require("./database");
const { PORT } = require("./config");

const startApplication = async () => {
  console.clear();
  try {
    // Connect to the database before starting the server
    await dbConnection();
    // Create an express app instance
    const app = express();

    // Middlewares to parse the incoming request data
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    // Routes for the application
    app.use("/", require("./routes/router"));

    // Start the server on the specified port
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log("**********************");
    console.log("error starting server", error);
    console.log("**********************");
    process.exit(1);
  }
};

// Start the application by calling the startApplication function
startApplication();
