function solve(arr) {
    let newArr = [arr[0]];
    let maxNum = arr[0]
    for (let i = 1; i < arr.length; i++) {
        //let num1 = arr[i]
        //for (let j = i + 1; j <= i + 1; j++) {
        if (Number(arr[i] >= maxNum)) {
            maxNum = Number(arr[i])
            newArr.push(maxNum)
        } else {
            continue;
        }
    }
    console.log(newArr.join(' '));
}