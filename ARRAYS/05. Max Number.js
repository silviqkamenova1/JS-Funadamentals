function solve(arr) {
    let newArr = [];
    for (i = 0; i < arr.length; i++) {
        let num1 = arr[i];
        let isLargest = true
        for (let j = i + 1; j < arr.length; j++) {
            if (num1 <= arr[j]) {
                isLargest = false
            }
        }
        if (isLargest) {
            newArr.push(num1)
        }
    }
    console.log(newArr.join(' '));
}