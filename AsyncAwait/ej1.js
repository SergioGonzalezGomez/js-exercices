//ASYNC & AWAIT



/* 1.1 Utiliza esta url de la api Agify 'https://api.agify.io?name=michael' para 
hacer un .fetch() y recibir los datos que devuelve. Imprimelo mediante un 
console.log(). Para ello, es necesario que crees un .html y un .js. */

const getDataMichael = async () => {
    const michaelFetch = await fetch("https://api.agify.io?name=michael");
    const michaelJSON = await michaelFetch.json();
    console.log(michaelJSON);
}

/* getDataMichael(); */


/* 2.1 Dado el siguiente javascript y html. Añade la funcionalidad necesaria usando 
fetch() para hacer una consulta a la api cuando se haga click en el botón, 
pasando como parametro de la api, el valor del input.
const baseUrl = 'https://api.nationalize.io'; */


                        /* const baseUrl = 'https://api.nationalize.io';
                        const boton$$ = document.querySelector('button');
                        const input$$ = document.querySelector('input');

                        const getDataNationalize = async () => {
                            const nationaliceFetch = await fetch(baseUrl + "?name=" + input$$.value);
                            const nationaliceJSON = await nationaliceFetch.json();
                            console.log(nationaliceJSON); 
                        };
                        boton$$.addEventListener('click', getDataNationalize); */


/*  2.3 En base al ejercicio anterior. Crea dinamicamente un elemento  por cada petición 
a la api que diga...'El nombre X tiene un Y porciento de ser de Z' etc etc.
EJ: El nombre Pepe tiene un 22 porciento de ser de ET y un 6 porciento de ser 
de MZ.  */
 

/*                         const baseUrl = 'https://api.nationalize.io';
                        const boton$$ = document.querySelector('button');
                        const input$$ = document.querySelector('input');

                        const getDataNationalize1 = async () => {
                            const nationaliceFetch = await fetch(baseUrl + "?name=" + input$$.value);
                            const nationaliceJSON = await nationaliceFetch.json();
                            for (const countries of nationaliceJSON.country) {
                                    
                                div$$ = document.createElement('div');
                                document.body.appendChild(div$$);
                                div$$.innerHTML += `<p>El nombre ${input$$.value} tiene un ${Math.round(countries.probability * 100)}% de ser de ${countries.country_id}</p>`
                            
                            };
                        };
                        boton$$.addEventListener('click', getDataNationalize1); */


/* 2.4 En base al ejercicio anterior, crea un botón con el texto 'X' para cada uno 
de los p que hayas insertado y que si el usuario hace click en este botón 
eliminemos el parrafo asociado.  */

const baseUrl = 'https://api.nationalize.io';
const boton$$ = document.querySelector('button');
const input$$ = document.querySelector('input');

const getDataNationalize1 = async () => {
    const nationaliceFetch = await fetch(baseUrl + "?name=" + input$$.value);
    const nationaliceJSON = await nationaliceFetch.json();
   
    let text = "";
    for (const countries of nationaliceJSON.country) {
        text = `El nombre ${input$$.value} tiene un ${Math.round(countries.probability * 100)}% de ser de ${countries.country_id}`
        
        const p$$ = document.createElement('p');
        p$$.textContent = text;

        const deleteButton$$ = document.createElement('button');
        deleteButton$$.innerHTML = "X";
        document.body.appendChild(p$$);
        deleteButton$$.addEventListener('click', () => {
            p$$.remove();
            deleteButton$$.remove();
        });
        document.body.appendChild(deleteButton$$);
    };
    
};    

boton$$.addEventListener('click', getDataNationalize1); 



