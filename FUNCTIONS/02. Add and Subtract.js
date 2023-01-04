function addSubtract(num1, num2, num3) {

    function sum(num1, num2) {
        return num1 + num2;
    }
    function subtract(sumNums, num3) {
        return sumNums - num3
    }

    let sumNums = sum(num1, num2);
    let result = subtract(sumNums, num3);
    console.log(result);
}