function words(text, word) {

    let newText = text.split(word)
    let sentence = newText.join('*'.repeat(word.length))
    console.log(sentence);

}
words('A small sentence with some words', 'small')
words('Find the hidden word', 'hidden')