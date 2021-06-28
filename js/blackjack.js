let firstCard=getRandomCard()
let secontCard=getRandomCard()
let cards=[firstCard,secontCard]
let sum=firstCard+secontCard
let hasBlackjack=false
let isAlive=true
let message=""
let messageEL=document.getElementById("message-el")
let sumEL=document.querySelector("#sum-el")
let cardsEL=document.querySelector("#cards-el")

function startGame(){
    renderGame()
}

function renderGame(){
    cardsEL.textContent="Cards: "

    for(let i=0; i<cards.length;i++){
        cardsEL.textContent+=cards[i]+" "
    }

    sumEL.textContent="Sum: "+sum
    if(sum<=20){
        message="do you want do draw a new card? 😊"
        messageEL.textContent=message;
    }
    else if(sum===21){
        message="Wohoo! You've got Blackjack!🤥"
        hasBlackjack=true
        messageEL.textContent=message;
    }
    else{
        message="You're out of the game!😭"
        isAlive=false
        messageEL.textContent=message;
    }

}
function newCard(){
    let card = getRandomCard()
    sum+=card;
    cards.push(card)
    console.log("🙂")
    renderGame()
}
function getRandomCard(){
    return card =5;
}