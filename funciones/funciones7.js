 //FUNCIONES 7

 const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];
  function finderName(param, paramName) {
        if (param.includes(paramName)){
            console.log(true);
            console.log(param.indexOf(paramName));
        }
    }
  
  console.log(finderName(nameFinder, "Peter"));