//FUNCIONES 6

const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(param) {
      let arr = [];
    for (let i = 0; i < param.length; i++){
        
        if (arr.includes(param[i]) == false){
            arr.push(param[i]);
        }
    }
    return arr;
  }
  console.log(removeDuplicates(duplicates));
