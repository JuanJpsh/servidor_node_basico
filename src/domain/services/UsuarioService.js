const usuarioDao = require("../../access/dao/UsuarioDao");

const getAll = async () => {
  const resp = await usuarioDao.find();
  return resp;
};

const login = async (user, cont) => {
  const resp = await usuarioDao.findByUserContra(user, cont);
  return resp;
};

module.exports = {
  getAll,
  login
};
