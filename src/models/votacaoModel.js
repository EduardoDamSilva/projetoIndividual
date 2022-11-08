var database = require("../database/config");

function votar(nomeCampeao){
  var instrucao = `UPDATE votacao set votos = (votos + 1) where nomeCampeao = "${nomeCampeao}";`;

  console.log("Computando o voto")
  return database.executar(instrucao)
}

/* function listar5MaisVotados(){
  var instrucao = `select * from votacao order by votos desc limit 5;`
  
  console.log("Listando os mais votados")
  return database.executar(listar5MaisVotados)
} */

module.exports = {
  votar
};