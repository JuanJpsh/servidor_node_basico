const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  idUser: { type: String, require: true },
  nombre: { type: String, require: true },
  precio: { type: Number, require: true },
});

module.exports = mongoose.model("productos", schema);
