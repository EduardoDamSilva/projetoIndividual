var votacaoModel = require("../models/votacaoModel");

function votar(req, res){
    var nomeCampeao = req.body.nomeCampeao;

    votacaoModel.votar(nomeCampeao)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        )
        .catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar o post: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
}

/* function listar10MaisVotados(req, res){
  votacaoModel.listar()
        .then(function (resultado) {
            if (resultado.length > 0) {
                res.status(200).json(resultado);
            } else {
                res.status(204).send("Nenhum resultado encontrado!")
            }
        }).catch(
            function (erro) {
                console.log(erro);
                console.log("Houve um erro ao realizar a consulta! Erro: ", erro.sqlMessage);
                res.status(500).json(erro.sqlMessage);
            }
        );
} */

module.exports = {
  votar
  /* listar5MaisVotados */
}