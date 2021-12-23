/* 1.1 Basandote en el array siguiente, crea una lista ul > li 
dinámicamente en el html que imprima cada uno de los paises.
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela']; */
const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul$$ = document.createElement('ul');
document.body.appendChild(ul$$);
let li$$ = '';
for (const country of countries) {
    li$$ += `<li>${country}</li>`;
}
ul$$.innerHTML = li$$;

/* 1.2 Elimina el elemento que tenga la clase .fn-remove-me. */
const removeClass$$ = document.querySelector(".fn-remove-me");
removeClass$$.remove();

/* 1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos 
en el div de html con el atributo data-function="printHere".
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola']; */
const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const printHere$$ = document.querySelector('[data-function="printHere"]');

const ul2$$= document.createElement('ul');
printHere$$.appendChild(ul2$$);
let li2$$ = '';
for (const car of cars) {
    li2$$ += `<li>${car}</li>`;
};
ul2$$.innerHTML = li2$$;

/* 1.4 Crea dinamicamente en el html una lista de div que contenga un elemento 
h4 para el titulo y otro elemento img para la imagen.*/
const countries1 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
]; 

const ul3$$ = document.createElement('ul');
document.body.appendChild(ul3$$);
let divs$$ = '';
for (const countri of countries1) {
     divs$$ += `<div><h4>${countri.title}</h4> <img src="${countri.imgUrl}"</div>`;
    };
ul3$$.innerHTML = divs$$;


/* 1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último 
elemento de la lista. */

const buttonLast$$ = document.createElement('button');
document.body.appendChild(buttonLast$$);
buttonLast$$.innerText = "Remove last";

buttonLast$$.addEventListener('click', function() {
    selectedDivs$$ = document.querySelectorAll('div');
    selectedDivs$$[selectedDivs$$.length-1].remove();
});



