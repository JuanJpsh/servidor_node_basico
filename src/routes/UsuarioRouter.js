const { Router } = require("express");
const router = Router();
const usuarioController = require("../presentation/UsuarioController");

router
  .get("/", usuarioController.getAll)
  .get("/login/:user/:cont", usuarioController.getByCredentials)
  .post("/", usuarioController.save)
  .put("/", usuarioController.update)
  .delete("/", usuarioController.deleteById);

module.exports = router;
