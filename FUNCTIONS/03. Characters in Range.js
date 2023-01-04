function characters(letter1, letter2) {
    let strat = Math.min(letter1.charCodeAt(), letter2.charCodeAt());
    let end = Math.max(letter1.charCodeAt(), letter2.charCodeAt());

    let str = ''
    for (let i = strat + 1; i < end; i++) {
        str += `${String.fromCharCode(i)} `
    }
    console.log(str);


}