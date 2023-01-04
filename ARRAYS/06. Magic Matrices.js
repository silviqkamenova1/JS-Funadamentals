function matrix(arr) {
    let rowSum = 0;
    let colSum = 0;
    let counter = 0;
    let magicNumberR = 0;
    let magicNumberC = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            rowSum += arr[i][j];
            colSum += arr[j][i];
            if (i === 0) {
                magicNumberR = rowSum;
                magicNumberC = colSum;
            }
        }
        if (rowSum !== colSum || rowSum !== magicNumberR || colSum != magicNumberC) {
            console.log("false");
            return;
        } else if (rowSum === colSum) {
            counter++;
        }
        colSum = 0;
        rowSum = 0;
    }
    if (counter === arr.length) {
        console.log("true");
    }
}