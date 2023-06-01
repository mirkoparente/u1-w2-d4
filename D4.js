/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

/* ESERCIZIO 1
 Scrivi una funzione di nome "area", che riceve due parametri (l1, l2) e calcola l'area del rettangolo associato..
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const area = function (l1, l2) {
  let arearettangolo = l1 * l2;
  console.log("area rettangolo", arearettangolo);
  return area;
};
area(20, 5);

/* ESERCIZIO 2
 Scrivi una funzione di nome "crazySum", che riceve due numeri interi come parametri.
 La funzione deve ritornare la somma dei due parametri, ma se il valore dei due parametri è il medesimo deve invece tornare
 la loro somma moltiplicata per tre.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
let n1 = 6;
let n2 = 6;
const sum = function () {
  let sum = n1 + n2;
  if (n1 === n2) {
    sum = sum * 3;
    console.log("sum *3", sum);
  } else {
    console.log("sum", sum);
  }
  return sum;
};
/* ESERCIZIO 3
 Scrivi una funzione di nome "crazyDiff" che calcola la differenza assoluta tra un numero fornito come parametro e 19.
 Deve inoltre tornare la differenza assoluta moltiplicata per tre qualora il numero fornito sia maggiore di 19.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

const crazyDiff = function (n1, n2 = 19) {
  let diff = n1 / n2;
  if (n1 > n2) {
    diff = diff * 3;
    console.log("diff *3", diff);
  } else {
    console.log("diff", diff);
  }
  return diff;
};
crazyDiff(5);
/* ESERCIZIO 4
 Scrivi una funzione di nome "boundary" che accetta un numero intero n come parametro, e ritorna true se n è compreso tra 20 e 100 (incluso) oppure
 se n è uguale a 400.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const boundary = function (n1) {
  if ((n1 >= 20 && n1 <= 100) || n1 === 400) {
    return true;
  } else {
    return false;
  }
};
console.log(boundary(25));
/* ESERCIZIO 5
 Scrivi una funzione di nome "epify" che accetta una stringa come parametro.
 La funzione deve aggiungere la parola "EPICODE" all'inizio della stringa fornita, ma se la stringa fornita comincia già con "EPICODE" allora deve
 ritornare la stringa originale senza alterarla.
*/

/* SCRIVI QUI LA TUA RISPOSTA */

/* ESERCIZIO 6
 Scrivi una funzione di nome "check3and7" che accetta un numero positivo come parametro. La funzione deve controllare che il parametro sia un multiplo
 di 3 o di 7. (Suggerimento: usa l'operatore modulo)
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const check3and7 = function (num1) {
  if (num1 % 3 === 0) {
    console.log("n1", num1 + " è multiplo di 3");
  } else if (num1 % 7 === 0) {
    console.log("n1", num1 + " è multiplo di 7");
  } else {
    console.log("n1", num1 + " non è multiplo di 3 o di 7");
  }
};
check3and7(24);
/* ESERCIZIO 7
 Scrivi una funzione di nome "reverseString", il cui scopo è invertire una stringa fornita come parametro (es. "EPICODE" --> "EDOCIPE")
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const reverseString = function (reverse) {
  return reverse.split("").reverse().join("");
};
console.log(reverseString("epicode".toUpperCase()));

/* ESERCIZIO 8
 Scrivi una funzione di nome "upperFirst", che riceve come parametro una stringa formata da diverse parole.
 La funzione deve rendere maiuscola la prima lettera di ogni parola contenuta nella stringa.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const upperFirst = function (str) {
  let newstr=str = str.split(" ")

  //   for (let i = 0; i < x.lenght; i++) {
  //     x = x[i].charAt(0).toUppercase();
  //   }
  console.log(str);
};
upperFirst("ciao a tutti");
// console.log(upperFirst("ciao a tutti"))
/* ESERCIZIO 9
 Scrivi una funzione di nome "cutString", che riceve come parametro una stringa. La funzione deve creare una nuova stringa senza il primo e l'ultimo carattere
 della stringa originale.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const cutString = function (inString) {
  inString = inString.slice(1, -1);

  return inString;
};
let stringac = cutString("buongiorno epicode");
console.log(stringac);
/* ESERCIZIO 10
 Scrivi una funzione di nome "giveMeRandom", che accetta come parametro un numero n e ritorna un'array contenente n numeri casuali inclusi tra 0 e 10.
*/

/* SCRIVI QUI LA TUA RISPOSTA */
const giveMeRandom = function (n) {
  let arrRandom = [];
  for (let i = 0; i <n-1; i++) {
    arrRandom[i] = Math.floor(Math.random() * 10);
    arrRandom.push(arrRandom[i]);
  }
  return arrRandom;
};
let array = giveMeRandom(5);
console.log(array);
