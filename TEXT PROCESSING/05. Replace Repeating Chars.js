function replaceChars(string) {
let result = ''
for(let i =0; i < string.length;i++) {
    let currentChar = string[i]
    let nextCgar = string[i + 1]
    if(currentChar !== nextCgar) {
        result += currentChar
    }
}
console.log(result);


}
replaceChars('aaaaabbbbbcdddeeeedssaa')