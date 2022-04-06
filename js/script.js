// Visualizzare in pagina 5 numeri casuali (in un range tra 1 e 100). Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Utility
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

// creo variabili
let generateNum = [];
let numeri = document.getElementById('numeri');
 
// Ciclo per numeri casuali
while(generateNum.length < 5){
    let numRandom = Math.floor(Math.random() * 100) + 1;
    if(!generateNum.includes(numRandom)){
        generateNum.push(numRandom);  
        let mioDiv =`<div>${numRandom}</div>`;
        numeri.innerHTML = generateNum;
    } 
 }

 