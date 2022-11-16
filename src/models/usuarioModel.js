var database = require("../database/config")

function listar() {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function listar()");
    var instrucao = `
        SELECT * FROM usuario;
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

function entrar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucao = `
        SELECT * FROM cadastro WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucao
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucao = `
        INSERT INTO cadastro (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucao);
    return database.executar(instrucao);
}

/* Votação */
function votar(idCampeao, idUsuario){
    var instrucao = `
    UPDATE votacao set votos = (votos + 1) where idCampeao = ${idCampeao};
    `;
  
    votarIntrução2(idCampeao, idUsuario)
    return database.executar(instrucao)
  }

function votarIntrução2(idCampeao, idUsuario){
    var instrucao = `
    UPDATE cadastro set fkCampeao = ${idCampeao} where idCadastro = ${idUsuario};
    `;

    return database.executar(instrucao)
}

function selecionarTop10(){
    var instrucao = `SELECT * FROM votacao ORDER BY votos desc limit 10;` 

    return database.executar(instrucao)
}

function addComentario(textoComentario){
    var instrucao = `INSERT INTO comentario(comentario) values
    ("${textoComentario}");
   ` 


    return database.executar(instrucao)
}
/* Atualiza a fk do comentário */
function atualizarDados(idUsuario){
    var instrucao = `
    UPDATE cadastro SET fkComentario = ${idUsuario} WHERE idCadastro = ${idUsuario};
   ` 
   return database.executar(instrucao)
}

function mostrarComentarios(){
    var instrucao = `SELECT * FROM comentario JOIN cadastro WHERE comentario.idComentario = cadastro.fkComentario;`

    return database.executar(instrucao)
}




module.exports = {
    entrar,
    cadastrar,
    listar,
    votar,
    selecionarTop10,
    addComentario,
    atualizarDados,
    mostrarComentarios
};