function stringSubstring(word,text) {
let newtext = text.split(' ')
for(let el of newtext) {
    let newWord = el.toLowerCase()
    if(newWord === word) {
        console.log(word);
        return;
    }
}
console.log(`${word} not found!`);

}
stringSubstring('javascript',
'JavaScript is the best programming language')
stringSubstring('python',
'JavaScript is the best programming language')