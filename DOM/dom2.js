
/* 2.1 Inserta dinamicamente en un html un div vacio con javascript.*/
const div1$$ = document.createElement('div');
document.body.appendChild(div1$$);


/* 2.2 Inserta dinamicamente en un html un div que contenga una p con javascript. */
const div2$$ = document.createElement('div');
div2$$.innerHTML = "<p></p>";
document.body.appendChild(div2$$);

/* 2.3 Inserta dinamicamente en un html un div que contenga 6 p utilizando un loop con javascript. */
const div3$$ = document.createElement('div');
document.body.appendChild(div3$$);
let p$$ = '';
for (let i = 0; i < 6; i++) {
    p$$ += '<p>hola</p>'
}
div3$$.innerHTML = p$$;

/* 2.4 Inserta dinamicamente con javascript en un html una p con el texto 'Soy dinámico!'. */
const p1$$ = document.createElement('p');
p1$$.innerHTML = 'Soy dinámico!!.'
document.body.appendChild(p1$$);


/* 2.5 Inserta en el h2 con la clase .fn-insert-here el texto 'Wubba Lubba dub dub'. */
const fn$$ = document.querySelector('.fn-insert-here');
fn$$.textContent = 'Wubba Lubba dub dub';


/* 2.6 Basandote en el siguiente array crea una lista ul > li con los textos del array.
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter']; */
const apps = ['Facebook', 'Netflix', 'Instagram', 'Snapchat', 'Twitter'];
const ul1$$ = document.createElement('ul');
document.body.appendChild(ul1$$);

let li$$ = '';
for (const app of apps) {
   li$$ += `<li>${app}</li>`
}
ul1$$.innerHTML = li$$;

/* 2.7 Elimina todos los nodos que tengan la clase .fn-remove-me */
let rem$$ = document.querySelectorAll('.fn-remove-me');
console.log(rem$$);
for (const rem of rem$$) {
    rem.remove();
}

/* 2.8 Inserta una p con el texto 'Voy en medio!' entre los dos div. 
	Recuerda que no solo puedes insertar elementos con .appendChild. */
const p3$$ = document.createElement('p');
const div$$ = document.querySelectorAll('div');
p3$$.innerText = 'Voy en medio!';
document.body.insertBefore(p3$$, div$$[1]);


/* 2.9 Inserta p con el texto 'Voy dentro!', dentro de todos los div con la clase .fn-insert-here  */
const allInsert$$ = document.querySelectorAll('.fn-insert-here');
for (const insert of allInsert$$) {
    const pDentro$$ = document.createElement('p');
    pDentro$$.innerText = "Voy dentro!";
    insert.appendChild(pDentro$$);
}
