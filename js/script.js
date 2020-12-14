var buttonClicked = "";
var categorySelect = "city";
let fundo = '/assets/card.png';
let numberCardBack = 0;


function getCategory(category) {
    console.log("Method getCategory - buscando a categoria" + category);
    if(category === 'animal'){
        categorySelect = "animal";
    } else if(category === "city"){
        categorySelect = "city";
    } else if(category === "number"){
        categorySelect = "number";
    }
}

function iniciaJogo(nivel){
console.log("Method iniciando jogo..."+ nivel);
console.log(`${categorySelect}`);
        console.log("Categoria - Animais");
        for (let j = 0; j < nivel; j++) {

            const divAtual = document.getElementById('listCards');
            const newDiv = document.createElement("li");
            const nameClass = 'match' + `${j}`;
            newDiv.classList.add(nameClass);
            newDiv.innerHTML = `Test`;

            divAtual.appendChild(newDiv);
        }
}


function mostraCards(arrayImg, nivel){
    console.log("Method mostraCards - " + nivel);
     for (let i = 0; i < nivel; i++) {
        const divAtual = document.getElementById('cards');
        const newDiv = document.createElement("div");
        newDiv.classList.add('card');
        newDiv.setAttribute('data-position', i);
        newDiv.innerHTML =
				`<div class="voltaFront" data-position=" ${i}
				"><img src="${fundo}"/></div><div class="voltaBack" data-position="'${i}
				><img src="${arrayImg[i]}"/></div>`
        divAtual.appendChild(newDiv);
    }
}

function numberCards(nivel){
 
    removeSubtitle();
    addSubtitle();
    removeButtons();
    iniciaJogo(nivel);
    clicked();
    // if(event){
    //     const cards = document.querySelectorAll('.voltaFront');
    //     cards.forEach(card => card.addEventListener('click', flipCard));
    // mostraCards(temp, nivel)

//cria as divs no html
    // let fundo = '/assets/card.png'
    //  for (let i = 1; i <= nivel; i++) {
        // var number = document.createElement('img');
        // number.setAttribute('class', 'cardItem');

        // const divAtual = document.getElementById('cards');
        // const newDiv = document.createElement("div");
        // newDiv.classList.add('card');
        // newDiv.setAttribute('data-position', i);
        // newDiv.innerHTML =
		// 		`<div class="voltaFront" data-position=" ${i}
		// 		"><img src="${fundo}"/></div><div class="voltaBack" data-position="'${i}
		// 		><img src="${animaisArray[i].url}"/></div>`
        // divAtual.appendChild(newDiv);
        // // document.body.insertBefore(number, divAtual);
        // console.log(`${numbers[i].src}`);
    // }
}

function flipCard(){
    this.classList.toggle('flip');
}


function cancel(){
    window.alert(buttonClicked);
}

function removeSubtitle(){
    const deleteElement = document.getElementById('text-subtitle');
    deleteElement.remove();
}

function addSubtitle() {
    const subtitlePai =  document.getElementById('subtitle-page');
    subtitlePai.insertAdjacentHTML('beforeend',
    `<div class="options"><p class="tempo">Tempo:
     <span id="minute"></span>:<span id="second"></span>:<span id="millisecond"></span>
     </p><p id="exit"><a href="/">Sair</a></p></div>`);
    start();
}

 function removeButtons() {
     const menu = document.getElementById('menu-mod');
     menu.remove();
 }


function clicked(){
    // document.onclick() = function (event) {
    // let elementClicked = document.getElementById("cards").className;

    // console.log(elementClicked)
    // };

    const clicado = document.querySelectorAll('.voltaFront');
    clicado.forEach(card => card.addEventListener('click', flipCard));
    // console.log(clicado)

    // const cardsFlipers = document.getElementsByClassName('.voltaBack');
    // cardsFlipers.addEventListener('click', function(e){
    //     alert(e);
    // });

    // this.classList.
}

//Cronometro

let minute = 0;
let second = 0;
let millisecond = 0;

let cron;


function start() {
  pause();
  cron = setInterval(() => { timer(); }, 10);
}

function pause() {
  clearInterval(cron);
}

function timer() {
  if ((millisecond += 10) == 1000) {
    millisecond = 0;
    second++;
  }
  if (second == 60) {
    second = 0;
    minute++;
  }
  document.getElementById('minute').innerText = returnData(minute);
  document.getElementById('second').innerText = returnData(second);
  document.getElementById('millisecond').innerText = returnData(millisecond);
}

function returnData(input) {
  return input > 10 ? input : `0${input}`
}


