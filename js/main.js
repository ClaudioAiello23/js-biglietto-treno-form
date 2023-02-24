'use strict';

/* --------------------------------------------------------------------
 DEFINIZIONE E ASSOCIAZIONE DELLE VARIABILI AGLI ID/CLASSI DELL'HTML
 ---------------------------------------------------------------------*/

/* definire una variabile da associare al campo input con id="name_user",
nome e cognome inseriti dall'utente (variabile const)*/
const nameUser = document.getElementById('name_user');

/* definire una variabile da associare al campo input con id="km_travel",
chilometri da percorrere inseriti dall'utente (variabile const)*/
const kmTravel = document.getElementById('km_travel');

/* definire una variabile da associare al campo input con id="age_user",
età dell'utente (variabile const)*/
const ageUser = document.getElementById('age_user');

/* definire una variabile da associare all'id del viaggiatore nella sezione ticket*/
const travellerName = document.getElementById('traveller_name');

/* definire una variabile da associare all'id del tipo offerta nella sezione ticket*/
let ticketOffer = document.getElementById('ticket_offer');

/* definire una variabile da associare all'id carrozza (genera un numero random)*/
const trainWagon = document.getElementById('carrozza');

/* definire una variabile da associare all'id cp_code (genera un numero random)*/
const trainCp = document.getElementById('cp_code');

/* definire una variabile da associare all'id final price per il prezzo finale del ticket*/
let finalPrice = document.getElementById('final_price');

// definire una variabile da associare al bottone "Genera"
const calcButton = document.getElementById('calc_button');

// definire una variabile da associare al bottone "Annulla"
const resetButton = document.getElementById('reset_button');

// definire una variabile legata al bottone "Genera", da associare alla classe hidden container (che di default nasconde la sezione)
const showContainer = document.querySelector('.hidden_container');

// definire una variabile legata al bottone "Annulla", da associare alla classe hidden container (che di default nasconde la sezione)
const resetContainer = document.querySelector('.hidden_container');


/* --------------------------------------------------------------
PROCEDURA MANIPOLAZIONE DOM ALL'EVENTO CLICK DEL BUTTON "GENERA"
-----------------------------------------------------------------*/

calcButton.addEventListener('click',

function() {

    /* Al click del bottone "Genera" definisco 3 nuove variabili che prendono spunto
    dalle precedenti create e che sono legate all'inserimento degli input 
    da parte dell'utente sul sito); pertanto andrò a considerare i valori inseriti*/
    const nameUserValue = nameUser.value;
    const kmTravelValue = kmTravel.value;
    const ageUserValue = ageUser.value;

    /* inserisco le lo Switch (al posto delle IF) per distinguere 
    prezzo e tipo offerta nella sezione ticket del sito, a seconda che l'utente 
    sia minorenne, standard o over65.*/
    switch (ageUserValue){
            case 'Minorenne' :
            ticketOffer.innerHTML = 'Tariffa Minorenne';
            finalPrice.innerHTML = (0.21 * 0.8 * kmTravelValue).toFixed(2) + " €"; //sconto 20%
            break;

            case 'Over65' :
            ticketOffer.innerHTML = "Tariffa Over65";
            finalPrice.innerHTML = (0.21 * 0.6 * kmTravelValue).toFixed(2) + " €"; //sconto 40%
            break;

            default:
            ticketOffer.innerHTML = "Tariffa Standard";
            finalPrice.innerHTML = (0.21 * kmTravelValue).toFixed(2)+ " €";
    }

    /*Inserisco su html (nella sezione Il Mio Biglietto) il nome del viaggiatore
    che l'utente ha aggiunto nel campo input*/
    travellerName.innerHTML = nameUser.value;

     // Inserisco su html il numero random della carrozza
    trainWagon.innerHTML = Math.floor(Math.random()*10);
    
    // Inserisco su html il numero random del codice biglietto
    trainCp.innerHTML = Math.floor(Math.random()*100000);

    /*Aggiungo la classe show_container (creata sul CSS) che fa apparire il 
    contenitore "IL TUO BIGLIETTO al click del bottone (vedi css)*/
    showContainer.classList.add('show_container');

}

);


/* --------------------------------------------------------------
PROCEDURA MANIPOLAZIONE DOM ALL'EVENTO CLICK DEL BUTTON "ANNULLA"
-----------------------------------------------------------------*/

resetButton.addEventListener('click', 

function() {
    /*Al click del tasto Annulla, rimuovo la classe show_container (creata sul CSS)
     che faceva apparire il contenitore "IL TUO BIGLIETTO"; la sezione scompare e si
     torna alla sezione inserimento dei dati*/
    resetContainer.classList.remove('show_container');
    console.log(resetButton);

}

);

