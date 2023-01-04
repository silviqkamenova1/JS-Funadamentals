function countString(text, word) {
    let counter = 0;
    let newText = text.split(' ')
    // for(let el of newText) {
    //     if(el === word ) {
    //         counter++
    //     }
    // }
    // console.log(counter);
    let count = newText.filter(x => x === word).length
    console.log(count);
}
countString('softuni is great place for learning new programming languages',
'softuni')