// Visualizzare in pagina 5 numeri casuali (in un range tra 1 e 100). Da lì parte un timer di 30 secondi.
// Dopo 30 secondi l'utente deve inserire, uno alla volta, i numeri che ha visto precedentemente, tramite il prompt().
// Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.

// Utility
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

// Creo variabili
let generateNum = [];
let numeri = document.getElementById('numeri');
 
// Ciclo per numeri casuali
while(generateNum.length < 5){
    let numRandom = getRandomInt(1,100);
    if(!generateNum.includes(numRandom)){
        generateNum.push(numRandom);  
    } 
}
numeri.innerHTML = generateNum.join(' - ');

// Creo una funzione che rimuove i numeri dopo 30 secondi
setTimeout(removeNum,9000);

function removeNum() {
    numeri.style.display = 'none';
};

//  L'utente inserisce uno alla volta i numeri visti dopo 30 secondi tramite il prompt quindi creo una funzione con un ciclo all'interno per chiedere all'utente 5 volte di inserire i numeri
// Dire quanti numeri e quali sono stati indovinati

function confrontaNumeri(numeriUtente){
    const numeriAzzeccati = [];
    for(let i = 0; i < numeriUtente.length; i++){
        let num = numeriUtente[i];
        if(generateNum.includes(num)){
            numeriAzzeccati.push(num);
        }
        if(generateNum.length === numeriAzzeccati.length){
            alert('Hai indovinato tutti i numeri!');
        }
        else{
            numeri.innerHTML = generateNum.join(' - ');
            const numeriUtenteElm = document.getElementById('numeri-utente');
            const numeriIndovinatiElm = document.getElementById('numeri-corrispondenti');
            const numeriIniziali = document.getElementById('numeri-iniziali');
            numeriIniziali.innerHTML = `Numeri iniziali ${generateNum.join('- ')}`;
            numeriUtenteElm.innerHTML = `Numeri inseriti da te: ${numeriUtente.join(' - ')}`
            numeriIndovinatiElm.innerHTML = `Hai indovinato solo questi numeri:${numeriAzzeccati.join(' - ')}`;
        }
    }
};

const timer = setTimeout(() =>{
    const numeriUtente = [];
    while(numeriUtente.length < 5){
        const num = parseInt(prompt('Inserisci i numeri uno alla volta'));
        if(!numeriUtente.includes(num)){
            numeriUtente.push(num);
        }
    }
    confrontaNumeri(numeriUtente);
},3000);