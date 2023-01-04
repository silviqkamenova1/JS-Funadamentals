function sumEvenNum(array) {
    let sum = 0
    for (let i = 0; i <= array.length - 1; i++) {
        let num = Number(array[i]);
        if (num % 2 === 0) {
            sum += num
        }
    }
    console.log(sum);



}