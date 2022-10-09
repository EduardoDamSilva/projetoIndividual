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
    exibirAviso(pAvisoNomeUsuario, inputNomeUsuario, "Seu nome de usuário deve conter mais de 6 dígitos")
  }

  if (email == ""){
    exibirAviso(pAvisoEmail, inputEmail, "Insira um email")
  }

  if(email.indexOf("@") < 3 || email.indexOf(" ") >= 0 || !email.indexOf(".")){
    exibirAviso(pAvisoEmail, inputEmail, "Email inválido")
  }

  if(senha.length < 8){
    exibirAviso(pAvisoSenha, inputSenha, "Senha muito curta")
  }
  
  if(senha != confirmarSenha){
    exibirAviso(pAvisoConfirmarSenha, inputConfirmarSenha, "Senhas incompátiveis")
  }
}

function exibirAviso(paragrafoTag, input, mensagem){
  paragrafoTag.innerHTML = mensagem
  paragrafoTag.style.display = "block"
  input.style.backgroundColor = "#F3E3F4"
  input.style.border = "2px solid #EEBBF1"
}


