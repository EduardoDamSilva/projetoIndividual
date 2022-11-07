const divCampeao = document.querySelectorAll(".campeoes")

for(var i = 0; i < divCampeao.length; i++){
  divCampeao[i].addEventListener("click", votar)
}

function votar(evento){
  const divQueClicou = evento.currentTarget;
  const nomeDoPersonagem = divQueClicou.lastElementChild.innerHTML;
  console.log(nomeDoPersonagem)
}