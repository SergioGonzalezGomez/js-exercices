
const animales = ['Caracol', 'Mosquito', 'Salamandra', 'Ajolote']
/*
function findArrayIndex(array, text) {
    return array.indexOf(text);
}
*/


function findArrayIndex(array, text) {
    for (let i = 0; i < array.length; i++){
        if (array[i] == text){
            return i;
        } 
    }
     return -1;
    
}
console.log(findArrayIndex(animales, 'jorge'))
console.log(findArrayIndex(animales, 'Mosquito'));