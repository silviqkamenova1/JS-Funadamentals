function solve(word1, char, word2) {

    //console.log(word1.replace('_', char) === word2 ? 'Matched':'Not Matched');
    let buff = ''
    let newWord = ''
    for(i = 0; i < word1.length; i++) {
        let currentChar = word1[i]
        if(currentChar === '_') {
            newWord += char
        } else {
            newWord += currentChar
        }
    }
    if(newWord === word2) {
        console.log('Matched');
    } else {
        console.log('Not Matched');
    }
    }