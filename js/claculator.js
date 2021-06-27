let num1=8;
let num2=2;
document.getElementById('num1-el').textContent=num1;
document.getElementById('num2-el').textContent=num2;
let resultEL=document.getElementById("result-el");
function add(){
    resultEL.textContent="Result: " + (num1+num2)
}function subtract(){
    resultEL.textContent="Result: " + (num1-num2)
}function multiply(){
    resultEL.textContent="Result: " + (num1*num2)
}function divide(){
    resultEL.textContent="Result: " + (num1/num2)
}