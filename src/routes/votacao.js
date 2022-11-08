var express = require("express");
var router = express.Router();

var votacaoController = require("../controllers/votacaoController");

router.put("/votar", function(req, res){
  votacaoController.votar(req, res);
})

/* router.get()("/listar5MaisVotados", function(req, res){
  votacaoController.listar5MaisVotados(req, res);
}) */

module.exports = router;