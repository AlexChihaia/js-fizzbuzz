'use strict';

/* 1) Scrivere un ciclo che riproduca 100 elementi */

let contatoreInizio = 0;
let contatoreFine = 100;

const fizz = 'FIZZ';
const buzz = 'BUZZ';
const fizzBuzz = 'FIZZBUZZ';

for (let elementNumber = contatoreInizio + 1; elementNumber <= contatoreFine; elementNumber++) {
    if (elementNumber % 3 === 0) {
        console.log(fizz);
    }
    else if (elementNumber % 5 === 0) {
        console.log(buzz);
    }
    else if (elementNumber % 3 === 0 && elementNumber % 5 === 0) {
        console.log(fizzBuzz);
    }
    else {
        console.log(elementNumber);
    }

}



/* 2) Scrivere una condizione che sostituisca i multipli di 3 con FIZZ e una condizione che sostituisca i multipli di 5 con BUZZ */

/* 3) Scrivere una condizione che per i multipli sia di 3 che di 5 concateni FIZZ e BUZZ */

/* 4) Rappresenta in HTML attraverso append gli elementi del ciclo */

/* 5) Modifica gli elementi affinché siano riconoscibili tra loro */ 