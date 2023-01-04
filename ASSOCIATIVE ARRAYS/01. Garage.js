function garage(arr) {
let list = {}
for(let el of arr) {
    let info = el.split(' - ')
    let garageNumber = info[0]
    let restInfo = info[1]
    
    if(!list.hasOwnProperty(garageNumber)) {
        list[garageNumber] = []
    }
    let infoCar = restInfo.split(', ')
    for(let array of infoCar) {
        let [key,value] = array.split(': ')
        list[garageNumber].push([key,value])

    }
    
}


}
garage(['1 - color: blue, fuel type: diesel', 
'1 - color: red, manufacture: Audi', 
'2 - fuel type: petrol', 
'4 - color: dark blue, fuel type: diesel, manufacture: Fiat'])