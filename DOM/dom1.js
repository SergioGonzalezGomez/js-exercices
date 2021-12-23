/* 1.1 Usa querySelector para mostrar por consola el botón con la clase .showme

1.2 Usa querySelector para mostrar por consola el h1 con el id #pillado

1.3 Usa querySelector para mostrar por consola todos los p

1.4 Usa querySelector para mostrar por consola todos los elementos con la clase.pokemon

1.5 Usa querySelector para mostrar por consola todos los elementos con el atributo 
data-function="testMe".

1.6 Usa querySelector para mostrar por consola el 3 personaje con el atributo 
data-function="testMe".
 */

const showMe$$ = document.body.querySelector('.showme');
const h1$$ = document.body.querySelector('#pillado');
const allP$$ = document.body.querySelectorAll('p');
const allPokemon$$ = document.body.querySelectorAll('.pokemon');
const allData$$ = document.body.querySelectorAll('[data-function="testMe"]');



console.log(showMe$$);
console.log(h1$$);
console.log(allP$$);
console.log(allPokemon$$);
console.log(allData$$);
console.log(allData$$[2]);