/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per visualizzare l'output, lancia il file HTML a cui è collegato e apri la console dagli strumenti di sviluppo del browser. 
- Utilizza dei console.log() per testare le tue variabili e/o i risultati delle espressioni che stai creando.
*/

/* ESERCIZIO 1
 Elenca e descrivi i principali datatype in JavaScript. Prova a spiegarli come se volessi farli comprendere a un bambino.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
// Le variabili  in JS sono come dei contenitori e i datatype sono il tipo di informazioni contenute nel contenitore.

// I datatype possono essere numeri come: 2,56,-4, o anche 3,14 infatti JS ammette come numeri sia i numeri interi che quelli frazionati.

// Possono essere string quindi parole o frasi all' interno di virgolette come: "Andrea","ciao
// questa e una stringa".

// Possono essere boolean quindi: vero (true) o falso (false)

// Una variabile puo essere anche undefined se per esempio definisco una variabile ma non assegno nessun valore: let myVar

// Una variabile puo essere null che e simile a undefined ma qui sono io che ho deciso che questa variabile dovrebbe essere vuota.
/* ESERCIZIO 2
 Crea una variable chiamata "myName" e assegna ad essa il tuo nome, sotto forma di stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let myName = "Andrea";
console.log(myName);

/* ESERCIZIO 3
 Scrivi il codice necessario ad effettuare un addizione (una somma) dei numeri 12 e 20.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let sum = 12 + 20;
console.log(sum);

/* ESERCIZIO 4
 Crea una variable di nome "x" e assegna ad essa il numero 12.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let x = 12;
console.log(x);

/* ESERCIZIO 5
  Riassegna un nuovo valore alla variabile "myName" già esistente: il tuo cognome.
  Dimostra l'impossibilità di riassegnare un valore ad una variabile dichiarata con il costrutto const.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
myName = "Maiolo";
console.log(myName);

const varInvariable = 3;
console.log(varInvariable);

// CONSTANTE NON CAMBIABILE
// varInvariable = 5;
// console.log(varInvariable);
// D1.js:51 Uncaught TypeError: Assignment to constant variable.
//     at D1.js:51:15

/* ESERCIZIO 6
 Esegui una sottrazione tra i numeri 4 e la variable "x" appena dichiarata (che contiene il numero 12).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let subtraction = 4 - x;
console.log(subtraction);

/* ESERCIZIO 7
 Crea due variabili: "name1" e "name2". Assegna a name1 la stringa "john", e assegna a name2 la stringa "John" (con la J maiuscola!).
 Verifica che name1 sia diversa da name2 (suggerimento: è la stessa cosa di verificare che la loro uguaglianza sia falsa).
 EXTRA: verifica che la loro uguaglianza diventi true se entrambe vengono trasformate in lowercase (senza cambiare il valore di name2!).
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let name1 = "john";
let name2 = "John";

console.log("le variabili sono diverse", name1 != name2);

console.log("le variabili sono uguali se trasformate", name1 === name2.toLowerCase());
