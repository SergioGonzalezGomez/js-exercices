//ITERACIONES 1  VARIABLES
let myFavouriteHero = "hulk";
let x = 50;
let h = 5;
let y = 10;
let z = h + y;
//console.log(z);

//ITERACIONES 2  VARIABLES AVANZADAS

//2.1
const character = {name: 'Jack Sparrow', age: 10};
character.age = 25;
//console.log(character.age);

//2.2
firstName = 'Jon'; 
lastName = 'Snow'; 
age = 24;
//console.log('Soy ' + firstName + ' ' + lastName + ', tengo ' + age + ' años y me gustan los lobos.');

//2.3
const toy1 = {name: 'Buss myYear', price: 19};
const toy2 = {name: 'Rallo mcKing', price: 29};
//console.log(toy1.price + toy2.price);

//2.4
let globalBasePrice = 25000;
const car1 = {name: 'BMW m&m', basePrice: 50000, finalPrice: 60000};
const car2 = {name: 'Chevrolet Corbina', basePrice: 70000, finalPrice: 80000};
car1.finalPrice = car1.basePrice + globalBasePrice;
car2.finalPrice = car2.basePrice + globalBasePrice;
//console.log(car1.finalPrice, car2.finalPrice);

//ITERACIONES 3 OPERADORES

//console.log(10*5);
//console.log(10/2);
//console.log(15%9);
//let a = 10;
//let b = 5;
//let ab = a + b;
//console.log(ab);
//let a = 10;
//let b = 5;
//let ab = a * b;
//console.log(ab);

//ITERACIONES 4 ARRAYS

// 4.1
//const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
//let hulk = avengers.shift();
//console.log(hulk);


//4.2
//let avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
//avengers.splice(0, 1, "IRONMAN");
//console.log(avengers);

//4.3
//const avengers = ["HULK", "SPIDERMAN", "BLACK PANTHER"];
//console.log(avengers.length);

//4.4

//const rickAndMortyCharacters = ["Rick", "Beth", "Jerry"];
//rickAndMortyCharacters.push("Morty", "Summer");
//console.log(rickAndMortyCharacters.pop());

//4.5

//let rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
//rickAndMortyCharacters.pop();
//console.log(rickAndMortyCharacters.shift());
//console.log(rickAndMortyCharacters.pop());


//4.6

let rickAndMortyCharacters = ["Rick", "Beth", "Jerry", "Morty", "Summer", "Lapiz Lopez"];
rickAndMortyCharacters.splice(1, 1);
console.log(rickAndMortyCharacters);