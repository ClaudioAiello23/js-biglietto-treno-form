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



// -------------------------------------------------------------
// INSERIMENTO AZIONE BOTTONE "GENERA" al click del bottone

// Creazione ed assegnazione variabili agli id/classi
const calcButton = document.getElementById('calc_button');
const showContainer = document.querySelector('.hidden_container');

// Procedura manipolazione DOM al click del button
calcButton.addEventListener('click',

function() {
    document.getElementById('name_repeat').innerHTML = nameUser.value;
    
    document.getElementById('carrozza').innerHTML = Math.floor(Math.random()*10);

    document.getElementById('cp_code').innerHTML = Math.floor(Math.random()*100000);
    /*Aggiunge la classe show_container che fa apparire il contenitore
    "il tuo biglietto al click del bottone (vedi css)"*/
    showContainer.classList.add('show_container');
}

);



