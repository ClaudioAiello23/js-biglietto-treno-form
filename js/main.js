'use strict';

/*- creare una variabile da associare al campo input con id="name_user",
nome e cognome inseriti dall'utente (variabile const)*/
const nameUser = document.getElementById('name_user');

/*- creare una variabile da associare al campo input con id="km_travel",
chilometri da percorrere inseriti dall'utente (variabile const)*/
const kmTravel = Number (document.getElementById('km_travel'));

/*- creare una variabile da associare al campo input con id="age_user",
età dell'utente (variabile const)*/
const ageUser = document.getElementById('age_user').value;

/*- impostare una variabile prezzo base del biglietto che è di 
0,21 € per km (variabile let)*/
let basePrice = parseFloat (0.21);

/*- impostare una variabile prezzo minorenni che parta dal prezzo 
base e lo sconti del 20% (variabile let)*/
let under18Price = parseFloat (basePrice /100 *80).toFixed(2);

/*- impostare una variabile prezzo over65 che parta dal prezzo 
base e lo sconti del 40% (variabile let)*/
let over65Price = parseFloat (basePrice /100 *60).toFixed(2);

console.log(ageUser).value;

// DA VERIFICARE - PER FABIO
/*Impostazione per mostrare sulla pagina web il totale da pagare a seconda dei 
dati compilati dall'utente*/
if (ageUser.value == 'Minorenne'){
    document.getElementById('final_price').innerHTML ='Biglietto Minorenne: ' +  ' random codice CP ' + (kmTravel * under18Price).toFixed(2) + "€";
    
} else if (ageUser.value == 'Over65'){
    document.getElementById('final_price').innerHTML ='Biglietto Over65: ' +  ' random codice CP ' + (kmTravel * over65Price).toFixed(2) + "€";

} else {
    document.getElementById('final_price').innerHTML ='Biglietto Standard: ' +  ' random codice CP ' + (kmTravel * basePrice).toFixed(2) + "€";

}



// prova per numero carrozza - NUMERI RANDOM
document.getElementById('carrozza').innerHTML ='Carrozza: ' + Math.floor(Math.random()*10);
// prova per codice CP - NUMERI RANDOM
document.getElementById('cp_code').innerHTML ='CP: ' + Math.floor(Math.random()*10000);


// PROVA INSERIMENTO AZIONE BOTTONE "GENERA"  - PER FABIO
const calcButton = document.getElementById('calc_button');

calcButton.addEventListener('click',

function() {
    
}

);