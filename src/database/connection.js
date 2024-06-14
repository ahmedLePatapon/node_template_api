const mongoose = require("mongoose");
const { DB_URL } = require("../config");

module.exports = async () => {
  try {
    await mongoose.connect(DB_URL);
    console.log("**********************");
    console.log("Db Connected");
    console.log("**********************");
  } catch (error) {
    console.log("**********************");
    console.log("error connection db", error);
    console.log("**********************");
    process.exit(1);
  }
};
