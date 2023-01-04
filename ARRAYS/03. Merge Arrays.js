function solve(firsArr, secondArr) {

    let newArray = [];
    for (let i = 0; i < firsArr.length; i++) {
        if (i % 2 === 0) {
            newArray.push(Number(firsArr[i]) + Number(secondArr[i]))
        } else {
            newArray.push(firsArr[i] + secondArr[i]);
        }
    }
    console.log(newArray.join(' - '));
}