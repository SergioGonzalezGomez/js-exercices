  //FUNCIONES  8


let counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
  ];

  function cuentaYQuita(arr, palabra){
    let respuesta = [];
    let cont = 0;
    for (let i = 0; i < arr.length; i++){
      if (palabra !== arr[i]){
        respuesta.push(arr[i]);
      } else {
        cont ++;
      }
    }
    console.log(`${palabra}: ${cont}`);
    return respuesta;
  }
 


  while (counterWords.length > 0){
    counterWords = cuentaYQuita(counterWords, counterWords[0]);
  }