/**
 * ESERCIZIO 1) CHIEDERE ALL'UTENTE LA MAIL, CONTROLLARE CHE SIA PRESENTE ALL'INTERNO DELL'ARRAY E CONFRONTARE IL DATO RICEVUTO CON I DATI PRESENTI E VISUALIZZARE UN MESSAGGIO SULL'ESITO DEL CONTROLLO
 * 
 * 1a)CHIEDERE IL DATO IN INPUT ALL'UTENTE
 * 
 * 1b)CONFRONTA IL DATO CON L'ARRAY GIA' ESISTENTE
 */

// OTTENGO IL DATO IN INPUT
 var datoInput = prompt('Fornisci la mail di accesso')

console.log("Il dato ottenuto in input è: " + datoInput);

//datoInput = datoInput.toLowerCase;
 // CREAZIONE DI ARRAY 

var mail = ['michele@boolean.careers','fabio@boolean.careers','roberto@boolean.careers'];

console.table(mail);

// CREO IL CICLO FOR PER ARRIVARE FINO ALL'ULTIMO ELEMENTO DELL'ARRAY E CREO LA CONDIZIONE DI CONTROLLO

for (i = 0; i < mail.length; i++ ) {
    var elemento = mail[i];
    console.table(elemento);

    if (datoInput == elemento) {
        console.log('Ok');
        
    } else {
        console.log('No');
        
    }
    
}