const productoDao = require("../../access/dao/ProductoDao");

const getAll = async () => {
  const resp = await productoDao.find();
  return resp;
};

const getByUser = async (idUser) => {
  if (idUser && idUser !== "0") {
    const resp = await productoDao.findByIdUser(idUser);
    return resp;
  }
  throw new Error('Param "idUser" cannot be "0", null or undefined');
};

module.exports = {
  getAll,
  getByUser,
};
