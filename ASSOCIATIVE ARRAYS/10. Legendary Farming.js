function farming(string) {
    let arr = string.split(' ')
    let list = {}
    let trash = {}
    for (let i = 0; i < arr.length; i += 2) {
        let quantity = +arr[i];
        let material = arr[i + 1].toLowerCase();
        if (material === 'shards') {
            if (!list.hasOwnProperty(material)) {
                list[material] = []
                list[material] = quantity
            } else {
                let oldMaterial = list[material]
                list[material] = oldMaterial + quantity
            }
            if (+list[material] >= 250) {
                console.log('Shadowmourne obtained!');
                let oldMaterial = list[material]
                list[material] = oldMaterial - 250
                break;
            }
        } else if (material === 'fragments') {
            if (!list.hasOwnProperty(material)) {
                list[material] = []
                list[material] = quantity
            } else {
                let oldMaterial = list[material]
                list[material] = oldMaterial + quantity
            }
            if (+list[material] >= 250) {

                console.log('Valanyr obtained!');
                let oldMaterial = list[material]
                list[material] = oldMaterial - 250
                break;
            }
        } else if (material === 'motes') {
            if (!list.hasOwnProperty(material)) {
                list[material] = []
                list[material] = quantity
            } else {
                let oldMaterial = list[material]
                list[material] = oldMaterial + quantity
            }
            if (+list[material] >= 250) {
                console.log('Dragonwrath obtained!');
                let oldMaterial = list[material]
                list[material] = oldMaterial - 250
                break;
            }
        } else {
            if (!trash.hasOwnProperty(material)) {
                trash[material] = []
                trash[material] = quantity
            } else {
                let oldMaterial = trash[material]
                trash[material] = oldMaterial + quantity
            }
        }
    }
    let unsortedlist = Object.entries(list)
    let sortedList = unsortedlist.sort(([keyA, valueA], [keyB, valueB]) => {
        return valueB - valueA || keyA.localeCompare(keyB)
    })
    for (let [key, value] of sortedList) {
        console.log(`${key}: ${value}`);
    }
    let unsortedTrash = Object.entries(trash)
    let sortedTrash = unsortedTrash.sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB)
    })
    for (let [key, value] of sortedTrash) {
        console.log(`${key}: ${value}`);
    }
}
//farming('3 Motes 5 stones 5 Shards 6 leathers 255 fragments 7 Shards')
farming('123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver')