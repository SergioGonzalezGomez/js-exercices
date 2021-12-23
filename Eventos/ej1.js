
/* 1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el 
evento click que ejecute un console log con la información del evento del click */

const button$$ = document.createElement('button');
button$$.id = 'btnToClick';
document.body.appendChild(button$$);

const evento = () => {
    console.log("click: botón izquierdo del ratón")
}
button$$.addEventListener('click', evento);


/* ***1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input. */

const focusEvent$$ = document.querySelector(".focus");
const inputValue$$ = focusEvent$$.value;
const evento1 = () => {
    console.log(inputValue$$);
}
focusEvent$$.addEventListener('focus', evento1);

/* 1.3 Añade un evento 'input' que ejecute un console.log con el valor del input. */

const inputEvent$$ = document.querySelector(".value");
const inputValue2$$ = inputEvent$$.value;
const evento2 = () => {
    console.log(inputValue2$$);
}
inputEvent$$.addEventListener('input', evento2);