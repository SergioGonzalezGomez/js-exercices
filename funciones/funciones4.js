
//FUNCIONES 4 
//nst numbers = [1, 2, 3, 5, 45, 37, 58];

function sumAll(param) {
    let sumaTotal = 0;
  for (let i = 0; i < param.length; i++){
      sumaTotal+=param[i]; 
  }
  return sumaTotal;
}







const numbers = [12, 21, 38, 5, 45, 37, 6];
function average(param) {
    let total = sumAll(param)/param.length;
    return total;
  }
console.log(average(numbers));