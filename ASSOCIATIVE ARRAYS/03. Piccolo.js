function piccolo(arr) {
    let list = []
    for (let el of arr) {
        let [direction, number] = el.split(', ');
        if (direction === 'IN') {
            if (!list.includes(number)) {
                list.push(number)
            }
        } else if (direction === 'OUT') {
            if(list.includes(number)) {
                let index = list.indexOf(number)
                list.splice(index, 1)
            }
        }
    }
    if (list.length > 0) {
        let sorted = list.sort((a, b) => a.localeCompare(b))
        console.log(sorted.join('\n'));
    } else {
        console.log("Parking Lot is Empty");
    }


}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA'])