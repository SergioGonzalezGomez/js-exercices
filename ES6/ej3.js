//SPREAD OPERATORS


/* 3.1 Dado el siguiente array, crea una copia usando spread operators. */
const pointsList1 = [32, 54, 21, 64, 75, 43]
const pointList1Copy = [...pointsList1]
console.log(pointList1Copy);


/* 3.2 Dado el siguiente objeto, crea una copia usando spread operators. */
const toy = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toyCopy = {...toy};
console.log(toyCopy);

/* 3.3 Dado los siguientes arrays, crea un nuevo array juntandolos usando 
spread operatos. */
const pointsList = [32, 54, 21, 64, 75, 43];
const pointsLis2 = [54,87,99,65,32];
const pointList3 = [...pointsList, ...pointsLis2];
console.log(pointList3);

/* 3.4 Dado los siguientes objetos. Crea un nuevo objeto fusionando los dos 
con spread operators. */
const toy1 = {name: 'Bus laiyiar', date: '20-30-1995', color: 'multicolor'};
const toy1Update = {lights: 'rgb', power: ['Volar like a dragon', 'MoonWalk']}
const toyUnion = {...toy1, ...toy1Update};
console.log(toyUnion);
/* 
3.5 Dado el siguiente array. Crear una copia de él eliminando la posición 2 
pero sin editar el array inicial. De nuevo, usando spread operatos. */
const colors = ['rojo', 'azul', 'amarillo', 'verde', 'naranja'];

const colors2 = [...colors];
colors2.splice(1, 1);
console.log(colors2);