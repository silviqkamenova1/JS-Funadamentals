function solve(array) {
    let newArray = [];

    for (i = 0; i < array.length; i++) {
        let currentArray = []
        for (j = i; j < array.length; j++) {
            if (array[i] === array[j]) {
                currentArray.push(array[i])
            } else {
                break;
            }
        }
        if (currentArray.length > newArray.length) {
            newArray = currentArray
        }
    }

    console.log(newArray.join(' '));
}