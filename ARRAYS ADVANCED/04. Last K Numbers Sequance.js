function lastKNums(n, k) {
    let newArr = [1];
    for (let i = 0; i < n - 1; i++) {
        let seq = newArr.slice(-k);
        let sum = 0;
        for (let
            el of seq) {
            sum += el
        }
        newArr.push(sum)
    }
    console.log(newArr.join(' '));
}