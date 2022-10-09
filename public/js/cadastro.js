function preencherCadastro(){
  var nomeUsuario = inputNomeUsuario.value
  var email = inputEmail.value
  var senha = inputSenha.value
  var confirmarSenha = inputConfirmarSenha.value

  /* Adicionar estilo no botão após todos serem preenchidos */
  if (nomeUsuario && email && senha && confirmarSenha){
    botaoSeta.style.backgroundColor = "#00C2DF"
    botaoSeta.style.border = "2px solid #00C2DF"
    botaoSeta.style.cursor = "pointer"
  } 
}

function validarCadastro(){
  var nomeUsuario = inputNomeUsuario.value
  var email = inputEmail.value
  var senha = inputSenha.value
  var confirmarSenha = inputConfirmarSenha.value

  if(nomeUsuario.length < 6){
    pAvisoNomeUsuario.style.display = "block"
    inputNomeUsuario.style.backgroundColor = "#F3E3F4"
    inputNomeUsuario.style.border = "2px solid #EEBBF1"
  } else if (email == ''){

  }
}