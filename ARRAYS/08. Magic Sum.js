function solve(array, num) {
    let validPair = []
    let isValid = ''
    for (i = 0; i < array.length; i++) {
        for (j = i + 1; j < array.length; j++) {
            if (array[i] + array[j] === num) {

                validPair.push(`${array[i]} ${array[j]}\n`)

            }
        }
    }
    console.log(validPair.join(' '));


}