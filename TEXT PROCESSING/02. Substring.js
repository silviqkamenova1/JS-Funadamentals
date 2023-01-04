function substring(string, num1, num2) {
    let end = num1 + num2
    let word = string.substring(num1, end)
    console.log(word);


}
substring('SkipWord', 4, 7)