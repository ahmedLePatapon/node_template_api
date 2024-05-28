const express = require("express");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const baseRouter = require("./route/router");

app.use("/", baseRouter);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
