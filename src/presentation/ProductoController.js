const productoService = require("../domain/services/ProductoService");

const getAll = (req, res) => {
  productoService.getAll().then(data => {
    res.json(data);
  })
};

const getAllByUser = (req, res) => {
  productoService.getByUser(req.params.idUser).then(data => {
    res.json(data);
  }).catch(error => {
    console.log(error.message)
    res.status(204).send(error);
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
  getAllByUser,
  update,
  deleteById,
};
