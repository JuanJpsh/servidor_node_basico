const usuarioService = require("../domain/services/UsuarioService");

const getAll = (req, res) => {
  usuarioService.getAll().then(data => {
    res.json(data);
  })
};

const getByCredentials = (req, res) => {
  usuarioService.login(req.params.user, req.params.cont).then(data => {
    res.json(data);
  })
};

const deleteById = (req, res) => {
  res.send("Logica de eliminar");
};

const update = (req, res) => {
  res.send("Logica de actualizar");
};

const save = (req, res) => {
  res.send("Logica de registrar");
};

module.exports = {
  save,
  getAll,
  getByCredentials,
  update,
  deleteById,
};
