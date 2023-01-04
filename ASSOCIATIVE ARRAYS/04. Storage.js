function storage(arr) {
    let list = {}
    for (let i = 0; i < arr.length; i++) {
        let [product, quantity] = arr[i].split(' ');
        if (!list.hasOwnProperty(product)) {
            list[product] = +quantity
        } else {
            let oldQuantity = +list[product]
            list[product] = oldQuantity + +quantity
        }

    }
    for(let [key,value] of Object.entries(list)){
        console.log(key,'->',value);
    }

    // let result = {}
    // for(let line of arr) {
    //     let [product, quantity] = line.split(' ');
    //     if(result.has(product)) {
    //         let oldQuantity = result.get(product);
    //         result.set(product, oldQuantity + Number(quantity))
    //     } else {
    //         result.set(product, Number(quantity))
    //     }
    // }
    // for(let [key,value] of result.entries()) {
    //     console.log(key, '->', value);
    // }
}
storage(['apple 50',
'apple 61',
'coffee 115',
'coffee 40'])