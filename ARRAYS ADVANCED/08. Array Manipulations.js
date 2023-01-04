function manipulations(nums) {
    let arr = nums
    let array = arr.shift(0).split(' ').map(Number)

    for (let i = 0; i < arr.length; i++) {
        let string = arr[i].split(' ')
        if (string[0] === 'Add') {
            array.push(Number(string[1]))
        } else if (string[0] === 'Remove') {
            for (let el of array) {
                if (el === Number(string[1])) {
                    let index = array.indexOf(el);
                    array.splice(index, 1)
                }
            }
        } else if (string[0] === 'RemoveAt') {
            let removenIndex = Number(string[1]);
            array.splice(removenIndex, 1);
        } else if (string[0] === 'Insert') {
            let number = Number(string[1])
            let index = Number(string[2]);
            array.splice(index, 0, number);
        }
    }
    console.log(array.join(' '));
}

