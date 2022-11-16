const productoModel = require("../../domain/models/Producto");

const find = async () => {
  data = await productoModel.find()
  return data
};

const findByIdUser = async (idUsuario) => {
  data = await productoModel.find({
    idUser: idUsuario
  })
  return data
};

module.exports = {
  find,
  findByIdUser
};
