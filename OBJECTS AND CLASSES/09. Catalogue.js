function catalogue(arr) {
    let newCatalogue = []
    for (let el of arr) {
        let [name, price] = el.split(' : ');
        let object = {
            name: name,
            price: +price,
        }
        newCatalogue.push(object)
    }
    let sorted = newCatalogue.sort((a, b) => {
        return a.name.localeCompare(b.name)
    })

    let currentLetter = '';
    for (let el of sorted) {
        if (el.name[0] !== currentLetter) {
            currentLetter = el.name[0]
            console.log(currentLetter);
            console.log(`${el.name}: ${el.price}`)
        } else {
            console.log(`${el.name}: ${el.price}`);
        }
    }
}
catalogue([
    'Appricot : 20.4',
    'Fridge : 1500',
    'TV : 1499',
    'Deodorant : 10',
    'Boiler : 300',
    'Apple : 1.25',
    'Anti-Bug Spray : 15',
    'T-Shirt : 10'
]
)