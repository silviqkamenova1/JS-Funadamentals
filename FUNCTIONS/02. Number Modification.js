function modification(number) {
    let result = 0
    let numToStr = String(number)
    let counter = 0;
    let newString = ''
    let add = 9

    for (let i = 0; i < numToStr.length; i++) {
        let currentNum = Number(numToStr[i])
        result += currentNum
        newString += String(currentNum)
        counter++
    }
    let newResult = result / counter
    while (newResult < 5) {
        result += add
        newString += String(add)

        counter++
        newResult = result / counter
    }
    console.log(newString);
}