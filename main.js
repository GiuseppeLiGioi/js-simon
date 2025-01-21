/*
**Descrizione:**
 Visualizzare in pagina 5 numeri casuali. Da lì parte un timer di 30 secondi.
Dopo 30 secondi i numeri scompaiono e appaiono invece 5 input in cui l'utente deve inserire i numeri che ha visto precedentemente, nell'ordine che preferisce.
Dopo che sono stati inseriti i 5 numeri, il software dice quanti e quali dei numeri da indovinare sono stati individuati.
**NOTA**: non è importante l'ordine con cui l'utente inserisce i numeri, basta che ne indovini il più possibile.
*/

let Numeri = [];
let numeriHtml = document.getElementById('numbers-list');
let divHtml = document.getElementById('instructions');
let counter = 30; // Timer di 30 secondi

// adesso mi creo i 5 numeri casuali 
for (let i = 0; i < 5; i++) {
    let numeroCasuale = Math.floor(Math.random() * (50 - 1)) + 1;
    Numeri.push(numeroCasuale);
}
numeriHtml.innerHTML = `I numeri da memorizzare sono: ${Numeri.join(', ')}`;


const ContoAllaRovescia = setInterval(function () {
    counter--;
    divHtml.innerHTML = counter;
    if (counter === 0) {
        clearInterval(ContoAllaRovescia);
        divHtml.innerHTML = "Inserisci i numeri che hai visualizzato (l'ordine non importa)";
        
    }
}, 1000);


setTimeout(function () {
    let form = document.getElementById('answers-form');
    numeriHtml.innerHTML = ""; // in quesyo modo nascondo i numeri
    form.classList.remove('d-none'); // così riesco a visualizzare il form
}, 30000);


let inputs = document.querySelectorAll('#input-group input');
let bottone = document.querySelector('.btn'); 
let messaggio = document.getElementById('message'); 
let numeriCorretti = [];
let numeriInseriti = [];

bottone.addEventListener('click', function (event) {
    event.preventDefault(); 
    

    
    for (let j = 0; j < 5; j++) {
        let numero = parseInt(inputs[j].value); 
        if (numero > 0 && numero <= 50) {
            numeriInseriti.push(numero); 
        } else {
            numeriInseriti.push(null); // i numeri non validi metto null
        }
    }

    
    numeriCorretti = [];
    for (let y = 0; y < 5; y++) {
        if (Numeri.includes(numeriInseriti[y])) {
            numeriCorretti.push(numeriInseriti[y]); 
        }
    }

    //FASE DI OUTPUT
    if (numeriCorretti.length > 0) {
        messaggio.innerHTML = `Hai indovinato ${numeriCorretti.length} numeri, eccoli: ${numeriCorretti.join(', ')}`;
    } else {
        messaggio.innerHTML = "Non hai indovinato nessun numero."; 
    }
});










