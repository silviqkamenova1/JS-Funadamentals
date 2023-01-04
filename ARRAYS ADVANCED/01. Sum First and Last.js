function sumFirstLast(arr) {
    let firstNum = arr.shift()
    let lastNum = arr.pop()
    //let firstNum = arr[0];
    //let lastNum = arr[arr.length - 1]
    let sum = Number(firstNum) + Number(lastNum)
    console.log(sum);
}