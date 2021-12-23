/* 1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los 
elementos de las listas que elimine ese mismo elemento del html.
 */
const countries1 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'}, 
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
]; 



for (const countri of countries1) {
    let divs$$ = document.createElement('div');
    document.body.appendChild(divs$$);
     divs$$.innerHTML = `<h4>${countri.title}</h4><img src=${countri.imgUrl}/>`;
     
     let buttonItem$$ = document.createElement('button');
        buttonItem$$.innerText = "Elimina este item";
        divs$$.appendChild(buttonItem$$);
        buttonItem$$.addEventListener('click', function(){
            divs$$.remove();
        })
    };






