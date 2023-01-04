function minerTask(arr) {
    let object = {}
for(let i = 0; i < arr.length; i += 2){
    let resource = arr[i];
    let quantity = +arr[i + 1]
    if(!object.hasOwnProperty(resource)) {
        object[resource] = []
    }
    let oldQuantity = +object[resource]
    object[resource] = oldQuantity + quantity
}
for(let [key,value] of Object.entries(object)) {
    console.log(`${key} -> ${value}`);
}
}
minerTask([
    'gold',
    '155',
    'silver',
    '10',
    'copper',
    '17',
    'gold',
    '15'
    ])