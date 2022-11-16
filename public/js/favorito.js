const pesquisaInput = document.querySelector(".pesquisa")
pesquisaInput.addEventListener('keypress', pesquisarCampeao)

function pesquisarCampeao(event){
  console.log(event)
  if (event.key == "Enter"){
    const inputPesquisa = document.querySelector("#inputPesquisa")
    const arrayDivCampeoes = document.querySelectorAll(".campeoes")

    for(var i = 0; i < arrayDivCampeoes.length; i++){
      var nomeCampeao = arrayDivCampeoes[i].children[1].innerHTML.toLowerCase()
      var pesquisa = inputPesquisa.value.toLowerCase()
      
      console.log(!(nomeCampeao.includes(pesquisa)))

      if(!(nomeCampeao.includes(pesquisa))){
        arrayDivCampeoes[i].classList.add("desativado")
        arrayDivCampeoes[i].classList.remove("transicao")
      } else {
        arrayDivCampeoes[i].classList.add("transicao")
        arrayDivCampeoes[i].classList.remove("desativado")
      }
    }
  }
  
}

function exibirCampeoes(){
  const campeoesArray = [ "Aatrox", "Ahri", "Akali", "Akshan", "Alistar", "Amumu", "Anivia", "Annie", "Aphelios", "Ashe", "Aurelion Sol", "Azir", "Bardo", "Bel'veth", "Blitzcrank", "Brand", "Braum", "Caitlyn", "Camille", "Cassiopeia", "Cho'gath", "Corki", "Darius", "Diana", "Dr. mundo", "Draven", "Ekko", "Elise", "Evelynn", "Ezreal", "Fiddlesticks", "Fiora", "Fizz", "Galio", "Gangplank", "Garen", "Gnar", "Gragas", "Graves", "Gwen", "Hecarim", "Heimerdinger", "Illaoi", "Irelia", "Ivern", "Janna", "Jarvan IV", "jax", "Jayce", "Jhin", "Jinx", "K'sante", "Kai'sa", "Kalista", "Karma", "Karthus", "Kassadin", "Katarina", "Kayle", "Kayn", "Kennen", "Kha'zix", "Kindred", "Kled", "Kog'maw", "Leblanc", "Lee sin", "Leona", "Lilia", "Lissandra", "Lucian", "Lulu", "Lux", "Malphite", "Malzahar", "Maokai", "Master Yi", "Miss Fortune", "Mordekaiser", "Morgana", "Nami", "Nasus", "Nautilus", "Neeko", "Nidalee", "Nilah", "Nocturne", "Nunu e Will", "Olaf", "Orianna", "Ornn", "Pantheon", "Poppy", "Pyke", "Qiyana", "Quinn", "Rakan", "Rammus", "Rek'sai", "Rell", "Renata Glasc", "Renekton", "Rengar", "Riven", "Rumble", "Ryze", "Samira", "Sejuani", "Senna", "Seraphine", "Sett", "Shaco", "Shen", "Shyvana", "Singed", "Sion", "Sivir", "Skarner", "Sona", "Soraka", "Swain", "Sylas", "Syndra", "Tahm Kench", "Taliyah", "Talon", "Taric", "Teemo", "Thresh", "Tristana", "Trundle", "Tryndamere", "Twisted Fate", "Twitch", "Udyr", "Urgot", "Varus", "Vayne", "Veigar", "Vel'koz", "Vex", "Vi", "Viego", "Viktor", "Vladimir", "Volibear", "Warwick", "Wukong", "Xayah", "Xerath", "Xin zhao", "Yasuo", "Yone", "Yorick", "Yuumi", "Zac", "Zed", "Zeri", "Ziggs", "Zilean", "Zoe", "Zyra"]
  const divTodosCampeoes = document.querySelector(".todosCampeoes")
  for(var i = 0; i < campeoesArray.length; i++){
    divTodosCampeoes.innerHTML +=`
    <div class="campeoes">
          <img src="assets/campeoes/${campeoesArray[i].toLowerCase()}.jpg" alt="${campeoesArray[i]}">
          <span class="campeao-legenda">${campeoesArray[i]}</span>
          <span class="idCampeao">${i + 1}</span>
    </div>`
  }

}
exibirCampeoes()
