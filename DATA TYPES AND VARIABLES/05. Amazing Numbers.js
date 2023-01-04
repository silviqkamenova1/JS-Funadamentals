function solve(number) {
    let numToString = String(number);

    let sum = 0
    for (i = 0; i < numToString.length; i++) {
        let currentNum = Number(numToString[i]);
        sum += currentNum
    }

    let sumToString = String(sum);
    for (i = 0; i < sumToString.length; i++) {
        if (Number(sumToString[i]) === 9) {
            console.log(`${number} Amazing? True`);
            return;
        }
    }

    console.log(`${number} Amazing? False`);

}