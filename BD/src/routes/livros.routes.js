const express = require("express");
const router = express.Router();

const controller = require("../controller/livros.controller");

router.get("/livros", controller.listarLivros);
router.get("/livro/:id", controller.buscarLivros);
router.post("/livro", controller.cadastrarLivros);
router.put("/livro/:id", controller.atualizarLivro);
router.delete("/livro/:id", controller.excluirLivro);

module.exports = router;