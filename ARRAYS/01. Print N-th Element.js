function solve(array) {
    let lastInput = Number(array[array.length - 1])
    let buff = ''

    for (i = 0; i < array.length - 1; i += lastInput) {
        if (lastInput === 3) {
            buff += `${array[i]} `
        } else {
            buff += `${array[i]} `
        }
    }
    console.log(buff);



}