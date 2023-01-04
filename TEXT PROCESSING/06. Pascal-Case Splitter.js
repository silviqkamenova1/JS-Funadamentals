function caseSplitter(string) {
    let list = [];
    let currentWord = string[0];
    for (let i = 1; i < string.length; i++) {
        if (string[i].toUpperCase() !== string[i]) {
            currentWord = currentWord.concat(string[i]);
        } else {
            list.push(currentWord);
            currentWord = string[i]
        }
    }
    list.push(currentWord)
    console.log(list.join(', '));


}
caseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan')