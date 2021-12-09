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
//console.log(rickAndMortyCharacters);



// ITERACIONES 5 CONDICIONALES

//5.1
const number1 = 10;
const number2 = 20;
const number3 = 2;

if (number2/number1 == 2) {
    //console.log("number2 dividido entre number1 es igual a 2");
  }

  if (number1 !== number2) {
    //console.log("number1 es estrictamente distinto a number2");
  }

  if (number3 != number1) {
    //console.log("number3 es distinto number1");
  } 
  
  if (number3 * 5 == number1) {
   // console.log("number3 por 5 es igual a number1");
  }
  if (number3 * 5 == number1 && number1 * 2 == number2) {
    //console.log("number3 por 5 es igual a number1 Y number1 por 2 es igual a number2");
  }
  if (number2 / 2 == number1 || number1 / 5 == number3) {
    //console.log("number2 entre 2 es igual a number1 O number1 entre 5 es igual a number3");
  } 
  

 // ITERACIONES 6 BUCLES 
//6.1
for (let i = 0; i <= 9; i++){
    //console.log(i);
}


//6.2
for (let i = 0; i <= 9; i++){
    if (i % 2 == 0){
        //console.log(i);
    }
}

//6.3
for (let i = 0; i <= 10; i++){
    if (i != 10){
        console.log("Intentando dormir");
    } else {
        console.log("Dormido!");
    }
}
