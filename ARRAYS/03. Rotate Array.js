function solve(arr) {
    let rotation = Number(arr[arr.length - 1])
    arr.pop()
    while (rotation > 0) {
        let elToMove = arr.pop();
        arr.unshift(elToMove)
        rotation--
    }
    console.log(arr.join(' '));
}