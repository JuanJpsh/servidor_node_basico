const mongoose = require("mongoose");

const schema = new mongoose.Schema({
  nombre: { type: String, require: true },
  usuario: { type: String, require: true },
  contrasenia: { type: String, require: true },
});

module.exports = mongoose.model("usuarios", schema);
