let futbolistas = ['Mesirve', 'Cristiano Romualdo', 'Fernando Muralla', 'Ronalguiño'];
function swap(arr, i1, i2){
    [arr[i1], arr[i2]] = [arr[i2], arr[i1]];
    return arr;
}
console.log(swap(futbolistas, 0, 3));