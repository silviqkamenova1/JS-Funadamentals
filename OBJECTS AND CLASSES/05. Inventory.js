function inventory(arr) {
    let heroesList = []
    //for (let i = 0; i < arr.length; i++) {
    for (let el of arr) {
        let [name, level, item] = el.split(' / ');
        //let items = item.split(', ');

        let object = {
            name: name,
            level: +level,
            item: item,
        };
        heroesList.push(object)
    }
    let sorted = heroesList.sort((a, b) => {
        return a.level - b.level
    });

    for (let el of sorted) {
        console.log(`Hero: ${el.name}`);
        console.log(`level => ${el.level}`);
        console.log(`items => ${el.item}`);
    }
}
inventory([
    'Isacc / 25 / Apple, GravityGun',
    'Derek / 12 / BarrelVest, DestructionSword',
    'Hes / 1 / Desolator, Sentinel, Antara'
]
)