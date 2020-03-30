/**
 * GENERARE UN NUMERO RANDOM DA 1 A 6 SIA PER GIOCATORE CHE PER COMPUTER
 * STABILIRE IL VINCITORE SULLA BASE DI CHI HA IL NUMERO PIU' GRANDE
 */
// VARIABILI
 var punteggioUtente = 0;
 var punteggioPc = 0;
 var numCasuale = 0;

 //CREO UNA VARIABILE CHE GENERA NUMERI CASUALI
punteggioUtente = Math.floor((Math.random()* 6) + 1);
alert(punteggioUtente);
punteggioPc = Math.floor((Math.random() * 6) + 1);
alert(punteggioPc);

if (punteggioUtente > punteggioPc) {
    alert("Punteggio dell'Utente vince");

} else if (punteggioUtente == punteggioPc) {
    alert('Parità');
} else {
    alert ('Pc vince');
}