
//FUNCIONES 5

const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];
function averageWord(param) {
    let total1 = 0;
  for (let i = 0; i < param.length; i++){
    if (typeof param[i] == "number") {
       total1 = total1 + param[i];
    } else if (typeof param[i] == "string"){
        total1 = total1 + param[i].length;
    }
    
  }
  let resultado = total1 / param.length;
  return resultado;
}
console.log(averageWord(mixedElements));