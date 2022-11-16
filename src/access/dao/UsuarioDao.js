const usuarioModel = require("../../domain/models/Usuario");

const find = async () => {
  data = await usuarioModel.find()
  return data
};

const findByUserContra = async (usuario, contrasenia) => {
  data = await usuarioModel.findOne({
    usuario: usuario,
    contrasenia: contrasenia
  })
  return data
};

module.exports = {
  find,
  findByUserContra
};
