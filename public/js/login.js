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

function verificarLogin(){
  var nomeUsuario = inputNomeUsuario.value
  var senha = inputSenha.value

  if(nomeUsuario != 'admin' && senha != 'admin'){
    pAviso.style.display = 'block'
    inputNomeUsuario.style.border = "2px solid #EEBBF1"
    inputNomeUsuario.style.backgroundColor = "#F3E3F4"
    inputSenha.style.backgroundColor = "#F3E3F4"
    inputSenha.style.border = "2px solid #EEBBF1"
      
    
  }
}

