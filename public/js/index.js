var incremento = 0
function ativarFuncao(){
  var campeaoLi = document.querySelectorAll(".campeao-js")
  var funcoesLi = document.querySelectorAll(".funcoes-js")

  for(var incrementoCampeoes = 0; incrementoCampeoes < campeaoLi.length; incrementoCampeoes++){
    campeaoLi[incrementoCampeoes].classList.remove('ativo')
  }

  for(var incrementoFuncoes = 0; incrementoFuncoes < funcoesLi.length; incrementoFuncoes++){
    funcoesLi[incrementoFuncoes].classList.remove('ativoFuncoes')
  }
  
  campeaoLi[incremento].classList.toggle('ativo')
  funcoesLi[incremento].classList.toggle('ativoFuncoes')
  incremento++

  if(incremento >= campeaoLi.length){
    incremento = 0
  }
}
ativarFuncao()
setInterval(ativarFuncao, 3000)


