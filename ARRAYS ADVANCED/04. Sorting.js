function sorting(arr) {
    let newArr = [];
    let maxNum = arr.sort((a, b) => b - a);
    while (maxNum.length > 0) {
        let biggest = maxNum.shift();
        newArr.push(biggest);

        let smallest = maxNum.pop();
        newArr.push(smallest)
    }
    console.log(newArr.join(' '))
}