function revealWords(word, text) {
word = word.split(', ')

for(let el of word) {
   
    text = text.replace('*'.repeat(el.length),el)
    
}
console.log(text);


}
revealWords('great',
'softuni is ***** place for learning new programming languages')