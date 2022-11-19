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

const sectionComoJogar = document.querySelectorAll(".comoJogar")
addEventListener("mousemove", paralax)
function paralax(event){
  const img = document.querySelector('.imgMapalol')

  img.style.transition = "transform"
  img.style.right = event.screenX * 0.025 + "px"
}


/* Animação site */
function animacaoSite(){
  const animacaoDivs = document.querySelectorAll('.js-scroll')
  const metadeDaTela = window.innerHeight * 0.5
  
  

  function animacaoScroll(evento){
    animacaoDivs.forEach((animar) => {
      const topoDaDiv = animar.getBoundingClientRect().top
      const conteudoVisivel = (topoDaDiv - metadeDaTela) < 0;
      console.log(animar)
      if(conteudoVisivel){
        animar.classList.add('animate')
      }
    })
  }

  animacaoScroll()
  window.addEventListener('scroll', animacaoScroll)
}
animacaoSite()



