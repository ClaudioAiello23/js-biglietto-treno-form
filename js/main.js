'use strict';

/*- creare una variabile da associare al campo input con id="name_user",
nome e cognome inseriti dall'utente (variabile const)*/
const nameUser = document.getElementById('name_user');

/*- creare una variabile da associare al campo input con id="km_travel",
chilometri da percorrere inseriti dall'utente (variabile const)*/
const kmTravel = document.getElementById('km_travel');

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


/*Impostazione per mostrare sulla pagina web il totale da pagare a seconda dei 
dati compilati dall'utente*/
if (ageUser === Minorenne){
    document.getElementById('final_price').innerHTML ='Biglietto Minorenne: ' + 'random_carrozza' + 'random codice CP' + (kmTravel * under18Price).toFixed(2) + "€";
    
} else if (etaUser === Over65){
    document.getElementById('final_price').innerHTML ='Biglietto Over65: ' + 'random_carrozza' + 'random codice CP' + (kmTravel * over65Price).toFixed(2) + "€";

} else {
    document.getElementById('final_price').innerHTML ='Biglietto Standard: ' + 'random_carrozza' + 'random codice CP' + (kmTravel * basePrice).toFixed(2) + "€";

}
