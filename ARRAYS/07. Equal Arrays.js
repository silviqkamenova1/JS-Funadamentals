function equal(arr1, arr2) {
    let sum1 = 0;
    let num1 = 0;
    let num2 = 0

    for (let i = 0; i <= arr1.length - 1; i++) {
        num1 = Number(arr1[i]);
        num2 = Number(arr2[i])
        if(num1 === num2) {
            sum1 += num1
            continue;
        } else {
            console.log(`Arrays are not identical. Found difference at ${i} index`);
            return;
        }
    }
    console.log(`Arrays are identical. Sum: ${sum1}`);
}