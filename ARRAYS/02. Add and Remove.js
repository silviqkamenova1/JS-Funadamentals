function solve(arr) {
    let command = ''
    let initialNum = 1
    let newNum = []
    for (i = 0; i < arr.length; i++) {
        if (arr[i] === 'add') {
            newNum.push(`${initialNum + i}`)
        } else if (arr[i] === 'remove') {
            newNum.pop()
        }
    }
    if (newNum.length === 0) {
        console.log('Empty');
    } else {
        console.log(newNum.join(' '));
    }

}