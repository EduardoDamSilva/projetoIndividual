var incremento2 = 0
function ativarFuncao(){
  var campeaoLi = document.querySelectorAll(".campeao-js")
  var campeaoLiArray = Array.from(campeaoLi)
  var funcoesLi = document.querySelectorAll(".funcoes-js")
  var funcoesLiArray = Array.from(funcoesLi)
  var incrementoFuncoes = 0
  var incrementoCampeoes = 0

  while(incrementoCampeoes < campeaoLiArray.length){
    campeaoLiArray[incrementoCampeoes].classList.remove('ativo')
    incrementoCampeoes++
  }

  while(incrementoFuncoes < funcoesLiArray.length){
    funcoesLiArray[incrementoFuncoes].classList.remove('ativoFuncoes')
    incrementoFuncoes++
  }
  console.log(campeaoLiArray)
  campeaoLiArray[incremento2].classList.toggle('ativo')
  funcoesLiArray[incremento2].classList.toggle('ativoFuncoes')
  incremento2++

  if(incremento2 >= campeaoLiArray.length){
    incremento2 = 0
  }
}
ativarFuncao()
setInterval(ativarFuncao, 3000)