function proccesOdd(arr) {
    let oddArr = [];
    for (let i = 0; i < arr.length; i++) {
        if (i % 2 !== 0) {
            let currnetNum = arr[i] * 2
            oddArr.push(currnetNum)
        } else {
            continue;
        }
    }
    console.log(oddArr.reverse().join(' '));
}