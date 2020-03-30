/**
 * ESERCIZIO 1) CHIEDERE ALL'UTENTE LA MAIL, CONTROLLARE CHE SIA PRESENTE ALL'INTERNO DELL'ARRAY E CONFRONTARE IL DATO RICEVUTO CON I DATI PRESENTI E VISUALIZZARE UN MESSAGGIO SULL'ESITO DEL CONTROLLO
 * 
 * 1a)CHIEDERE IL DATO IN INPUT ALL'UTENTE
 * 
 * 1b)CONFRONTA IL DATO CON L'ARRAY GIA' ESISTENTE
 * 
 * 1c) VISULIZZA ESITO DEL CONTROLLO
 */


 
// OTTENGO IL DATO IN INPUT
var datoInput = prompt('Fornisci la mail di accesso');

console.log("Il dato ottenuto in input è: " + datoInput);


 // CREAZIONE DI ARRAY 

var mail = ['michele@boolean.careers','fabio@boolean.careers','roberto@boolean.careers'];

// CREO IL CICLO FOR PER ARRIVARE FINO ALL'ULTIMO ELEMENTO DELL'ARRAY E CREO LA CONDIZIONE DI CONTROLLO
var userFound = false;
for ( var i = 0; i < mail.length; i++ ) {
    var elemento = mail[i];
    if (datoInput == elemento) {
        console.log(datoInput + " Email esistente!");
        alert(datoInput + " Email esistente!");
        userFound = true;
    } 
}

if (userFound === false) {
    console.log(datoInput + " Utente non trovato");
    alert(datoInput + " Utente non trovato");
}