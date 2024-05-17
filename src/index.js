const express = require("express");

const app = express();

const baseRouter = require("./api/routes/router");

app.use("/", baseRouter);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
