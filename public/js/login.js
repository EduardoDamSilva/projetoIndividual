function preencherLogin(){
  var nomeUsuario = inputNomeUsuario.value
  var senha = inputSenha.value

  /* Adicionar estilo no botão após todos serem preenchidos */
  if(nomeUsuario && senha) {
    botaoSeta.style.backgroundColor = "#00C2DF"
    botaoSeta.style.border = "2px solid #00C2DF"
    botaoSeta.style.cursor = "pointer"
  }
}


