/**
 * GENERARE UN NUMERO RANDOM DA 1 A 6 SIA PER GIOCATORE CHE PER COMPUTER
 * STABILIRE IL VINCITORE SULLA BASE DI CHI HA IL NUMERO PIU' GRANDE
 */


 //CREO UNA VARIABILE CHE GENERA NUMERI CASUALI
var punteggioUtente = Math.floor((Math.random()* 6) + 1);
alert("Il tuo punteggio è: " + punteggioUtente);

var punteggioPc = Math.floor((Math.random() * 6) + 1);
alert("Il punteggio del Pc è: "+ punteggioPc);

if (punteggioUtente > punteggioPc) {
    alert("Punteggio dell'Utente " + punteggioUtente + " VINCE!");

} else if (punteggioUtente == punteggioPc) {
    alert("Parità");
} else {
    alert ("Punteggio del PC " + punteggioPc + " VINCE!");
}