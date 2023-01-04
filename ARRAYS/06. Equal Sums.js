function solve(array) {

    let foundIndex = 'no'


    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        for (j = 0; j < i; j++) {
            leftSum = array[j] + leftSum
        }
        for (k = i + 1; k < array.length; k++) {
            rightSum = array[k] + rightSum
        }
        if (leftSum === rightSum) {
            foundIndex = i
        }
    }
    console.log(foundIndex);
}