function oddEven(num) {
    let numStr = String(num)
    let evenSum = 0;
    let oddSum = 0;
    for (let el of numStr) {
        let number = Number(el)
        if (el % 2 === 0) {
            evenSum += number
        } else {
            oddSum += number
        }
    }
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`);
}