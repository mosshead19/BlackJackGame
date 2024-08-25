
let firstCard = 10
let secondCard = 12

let sum = firstCard + secondCard
console.log(sum)
// track if the player has blackJack
let hasBlackJack = false
// track if the player doesnt have black jack
let isAlive = true

let message = ""

let messageEl = document.getElementById("message-el")
console.log(messageEl)

let sumEl = document.getElementById("sum-el")
let cardsEl = document.getElementById("cards-el")

function startGame() {
    if(sum<=20)
        {
        message = "Do you want to draw a new card? 🙂"
        sumEl.textContent = "Sum: " + sum
        cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    }
    
    else if(sum == 21){
        message = "Wohoo! You've got black jack 🥳"
        hasBlackJack = true
        sumEl.textContent = "Sum: " + sum
        cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    }
    
    else {
        message = "You're out of the game!😭"
        isAlive = false
        sumEl.textContent = "Sum: " + sum
        cardsEl.textContent = "Cards: " + firstCard + " " + secondCard
    }

    messageEl.textContent = message
}




