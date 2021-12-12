const alien = {
    name: 'Wormuck',
    race: 'Cucusumusu',
    planet: 'Eden',
    weight: '259kg'
}
/*for (const props in alien) {
    if (alien.hasOwnProperty.call(alien, props)) {
        const element = alien[props];
        console.log(`${props}: ${element}`);
    }
} */

for (const props in alien) {
    console.log(props, ":", alien[props]);
}
