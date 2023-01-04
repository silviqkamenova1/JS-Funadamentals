function condenseArrayToNumber(array) {
    let sum = 0;

    while (array.length > 1) {
        let newArray = [];
        for (let i = 0; i < array.length - 1; i++) {
            let num1 = Number(array[i]);
            let num2 = Number(array[i + 1]);
            sum = num1 + num2;
            newArray.push(sum)
        }
        array = newArray

    }
    console.log(Number(array));
}