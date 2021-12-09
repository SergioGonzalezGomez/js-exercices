 //FUNCIONES 2

 const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
 function findLongestWord(param) {
     let mc;
   for (let i = 1; i < param.length; i++){
       mc = param[0];
       if (mc.length < param[i].length) {
           mc = param[i];
       }
   }
   return mc;
 }
 console.log(findLongestWord(avengers));