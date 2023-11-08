'use strict';

/* 1) Scrivere un ciclo che riproduca 100 elementi */

let contatoreInizio = 0;
let contatoreFine = 100;

const elementUl = document.querySelector('ul.ac-list')

for (let elementNumber = contatoreInizio + 1; elementNumber <= contatoreFine; elementNumber++) {
    const li = document.createElement('li');
    const div = document.createElement('div');
    elementUl.append(li);

    li.classList.add('col-1', 'm-2', 'p-3', 'w-5', 'rounded', 'text-center', 'list-group-item');
    if (elementNumber % 3 === 0 && elementNumber % 5 === 0) {
        li.append('FIZZBUZZ');
        li.classList.add('fizz-buzz-color');
    }
    else if (elementNumber % 5 === 0) {
        li.append('BUZZ');
        li.classList.add('buzz-color');
    }
    else if (elementNumber % 3 === 0) {
        li.append('FIZZ');
        li.classList.add('fizz-color');
    }
    else {
        li.append(elementNumber);
        li.classList.add('number-color');
    }



}



/* 2) Scrivere una condizione che sostituisca i multipli di 3 con FIZZ e una condizione che sostituisca i multipli di 5 con BUZZ */

/* 3) Scrivere una condizione che per i multipli sia di 3 che di 5 concateni FIZZ e BUZZ */

/* 4) Rappresenta in HTML attraverso append gli elementi del ciclo */

/* 5) Modifica gli elementi affinché siano riconoscibili tra loro */ 