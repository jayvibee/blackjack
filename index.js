
let Card = []
let Sum = 0
let message = ""
let isAlive = false
let hasBlackJack = false
let info = document.getElementById("info")
let sumEl = document.getElementById("sum")
let cardEl = document.getElementById("Card")

let player = {
    Name :"Jay",
    Chips: 205
}


let playerEl = document.getElementById("play-el")
playerEl.textContent = player.Name + ": $" + player.Chips


function getRandomCard(){
   
   let randomNumber = Math.floor(Math.random() * 13) +1
    if(randomNumber === 1 ){
        return 11
    }else if(randomNumber > 10){
        return 10
    }else {
        return randomNumber
    } 
}

function start(){
    let firstCard = getRandomCard()
    let secondCard = getRandomCard()
    Card = [firstCard, secondCard]
    Sum = firstCard + secondCard
    isAlive = true
 render()
}

function render(){
    cardEl.textContent = "Card:" 
    for (let i = 0; i < Card.length; i++){
    cardEl.textContent += Card[i] + " "
    }
    sumEl.textContent = "Sum:"+Sum
    if (Sum === 21){
        hasBlackJack = true
    message="Yay!, You won!"
    isAlive = true
    hasBlackJack = true
    } else if(Sum < 21){
    message= "Pick another card"
    isAlive = true
    } else {
    message="Awww, You lost"
    isAlive = false
    }
info.textContent = message
}
function newCard(){
    if (isAlive === true && hasBlackJack === false) {
    let newCard = getRandomCard()
    Sum += newCard
    Card.push(newCard)
    render()
}
}
