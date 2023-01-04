function storeProvision(stock, orders) {
    let store = {}
    for (let i = 0; i < stock.length; i += 2) {
        let product = stock[i];
        store[product] = +stock[i + 1];
    }
    // stock.foEach((el, i) => {
    //     if (i % 2 === 0) {
    //         let product = stock[i];
    //         let quantity = +stock[i + 1];
    //         store[product] = quantity
    //     }
    // });
    for (let i = 0; i < orders.length; i += 2) {
        let product = orders[i];

        if (!store.hasOwnProperty(product)) {
            store[product] = 0;
        }
        store[product] += +orders[i + 1]
    }
    for (let el in store) {
        console.log(`${el} -> ${store[el]}`);
    }

}
storeProvision([
    'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
],
    [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
    ]
)