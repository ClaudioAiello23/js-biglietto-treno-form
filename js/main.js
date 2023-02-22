'use strict';

/*- impostare variabile con valore prompt con la quale chiedere
all'utente il numero di km che deve percorrere (variabile const)*/
const kmTravel = parseInt (prompt ('PREGO INSERIRE IL NUMERO DI KM DA PERCORRERE'));

/*- impostare variabile con valore prompt con la quale chiedere
all'utente l'età (variabile const)*/
const etaUser = parseInt (prompt ('PREGO INSERIRE IL NUMERO DI ANNI'));

/*- impostare una variabile prezzo base del biglietto che è di 
0,21 € per km (variabile let)*/
let basePrice = parseFloat (0.21);

/*- impostare una variabile prezzo minorenni che parta dal prezzo 
base e lo sconti del 20% (variabile let)*/
let under18Price = parseFloat (basePrice /100 *80).toFixed(2);

/*- impostare una variabile prezzo over65 che parta dal prezzo 
base e lo sconti del 40% (variabile let)*/
let over65Price = parseFloat (basePrice /100 *60).toFixed(2);


/*-Sulla base delle precedenti informazioni fornite dall'utente:
- calcolare il prezzo totale da pagare, rispettando le condizioni sopra descritte.*/
if (etaUser < 18){
    console.log("Prezzo totale da pagare:", (kmTravel * under18Price).toFixed(2), "€");
    
} else if (etaUser > 65){
    console.log("Prezzo totale da pagare:", (kmTravel * over65Price).toFixed(2), "€");

} else {
    console.log("Prezzo totale da pagare:", (kmTravel * basePrice).toFixed(2), "€");

}


/*Impostazione per mostrare sulla pagina web la tariffa di partenza a seconda dei 
dati compilati dall'utente*/
if (etaUser < 18){
    document.getElementById('nb_age_user').innerHTML =  `La tua tariffa Minorenni: ${under18Price} €`;
    
    
} else if (etaUser > 65){
    document.getElementById('nb_age_user').innerHTML =  `La tua tariffa Over65: ${over65Price} €`;

} else {
    document.getElementById('nb_age_user').innerHTML =  `La tua tariffa: ${basePrice} €`;


}

/*Impostazione per mostrare sulla pagina web i km da percorrere a seconda dei 
dati compilati dall'utente*/
document.getElementById('nb_km_user').innerHTML =  `Chilometri da percorrere: ${kmTravel} km`;


/*Impostazione per mostrare sulla pagina web il totale da pagare a seconda dei 
dati compilati dall'utente*/
if (etaUser < 18){
    document.getElementById('nb_final_price').innerHTML ='TOTALE DA PAGARE: ' + (kmTravel * under18Price).toFixed(2) + "€";
    
} else if (etaUser > 65){
    document.getElementById('nb_final_price').innerHTML ='TOTALE DA PAGARE: ' + (kmTravel * over65Price).toFixed(2) + "€";

} else {
    document.getElementById('nb_final_price').innerHTML ='TOTALE DA PAGARE: ' + (kmTravel * basePrice).toFixed(2) + "€";

}
