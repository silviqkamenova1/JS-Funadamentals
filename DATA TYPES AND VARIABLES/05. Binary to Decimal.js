function binary(number) {
    let numAsString = number.split('');
    let degree = numAsString.length - 1;
    let currentNumSum = 0;
    for (let i = 0; i < numAsString.length; i++) {
        currentNumSum += Number(numAsString[i]) * Math.pow(2, degree);
        degree--
    }
    console.log(currentNumSum);

}