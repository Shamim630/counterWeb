let firstCard=10
let secontCard=11;
let sum=firstCard+secontCard;
let hasBlackjack=false;
let isAlive=true
let message=""
let messageEL=document.getElementById("message-el")

function startGame(){
    if(sum<=20){
        message="do you want do dra a new card? 😊"
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