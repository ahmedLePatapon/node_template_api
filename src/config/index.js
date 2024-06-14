let configOptions = {};

if (process.env.NODE_ENV !== "prod") {
  configOptions = {
    path: `./.env.${process.env.NODE_ENV}`,
    override: true,
  };
}

require("dotenv").config(configOptions);

const DB_URL = `mongodb+srv://${process.env.USER_DB}:${process.env.PWD_DB}@datatemplateapi.76megss.mongodb.net/?retryWrites=true&w=majority&appName=dataTemplateApi`;

module.exports = {
  PORT: process.env.PORT || 3000,
  DB_URL,
};
