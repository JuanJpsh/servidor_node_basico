const mongoose = require("mongoose");

//Settings Bd
const bd = "prueba";
const port = "27017";
const host = "localhost";

class Database {
  constructor() {
    this.connect();
  }
  connect() {
    mongoose
      .connect(`mongodb://${host}:${port}/${bd}`)
      .then(() => {
        console.log("Database connected successfully");
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

module.exports = new Database();