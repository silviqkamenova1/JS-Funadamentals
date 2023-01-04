function solve(num1, num2, num3) {
    let sum = num1 + num2 + num3

    //console.log(`${sum} - ${parseInt(sum) === sum ? 'Integer' : 'Float'}`);

    let sumToString = String(sum)
    for(i = 0; i < sumToString.length; i++) {
        if(sumToString[i] === '.') {
            console.log(`${sum} - Float`);
            break;
        } 
    }
    if(sumToString[i] !== '.'){
        console.log(`${sum} - Integer`);
    }
}
// function integerAndFloat(firstNum, secondNum, thirdNum) {
//     let sum = firstNum + secondNum + thirdNum;
//     let result = Number.isInteger(sum)?  " - Integer":  " - Float";
//     console.log(`${sum}${result}`);
// }