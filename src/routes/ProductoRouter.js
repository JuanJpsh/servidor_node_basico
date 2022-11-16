const { Router } = require("express");
const router = Router();
const productoController = require("../presentation/ProductoController");

router
  .get("/", productoController.getAll)
  .get("/:idUser", productoController.getAllByUser)
  .post("/", productoController.save)
  .put("/", productoController.update)
  .delete("/", productoController.deleteById);

module.exports = router;
