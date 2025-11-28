const express = require("express");
const router = express.Router();

const produtosController = require("../controllers/produtosController");

router.post("/", produtosController.criar);

router.post("/renovar", produtosController.renovar);

router.delete("/", produtosController.excluir);

module.exports = router;
