function chess(size) {
    let currentColor = 'black'
    let previousColor = ''

    console.log('<div class="chessboard">');

    for (let row = 1; row <= size; row++) {
        console.log('  <div>');
        for (let colum = 1; colum <= size; colum++) {
            console.log(`    <span class="${currentColor}"></span>`);

            previousColor = currentColor
            currentColor = previousColor === 'black' ? 'white' : 'black'
        }
        console.log('  </div>')
        if (size % 2 === 0) {
            previousColor = currentColor
            currentColor = previousColor === 'black' ? 'white' : 'black'
        }
    }
    console.log('</div>');
}