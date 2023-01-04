function factorialize(num, decimal) {
    /*let factorial = 1;
    let result1 = 1;
    let result2 = 1
    if (num === 0) {
        factorial = 1
    }
    for (let i = num; i >= factorial; i--) {
        result1 *= i
    }
    for (let i = decimal; i >= factorial; i--) {
        result2 *= i
    }
    console.log((result1 / result2).toFixed(2));
*/
    function result1(num) {
        let factorial = 1;
        let result1 = 1;
        for (let i = num; i >= factorial; i--) {
            result1 *= i
        }
        return result1;
    }
    function result2(decimal) {
        let factorial = 1;
        let result2 = 1;
        for (let i = decimal; i >= factorial; i--) {
            result2 *= i
        }
        return result2;
    }
    let finalResult = result1(num) / result2(decimal)
    console.log(finalResult.toFixed(2));
}