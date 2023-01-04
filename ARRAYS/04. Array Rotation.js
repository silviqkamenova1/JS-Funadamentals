function solve(arr, rotation) {

    while (rotation > 0) {

        let elToMove = arr.shift();
        arr.push(elToMove)

        rotation--
    }
    console.log(arr.join(' '));
}