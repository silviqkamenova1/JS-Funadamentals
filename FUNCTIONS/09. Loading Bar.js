function loadingBar(num) {
    let sign = '%'.repeat(num / 10);
    let points = '.'.repeat(10 - sign.length);
    if (num === 100) {
        console.log(`${num}% Complete!`);
    } else {
        console.log(`${num}% [${sign}${points}]`)
        console.log('Still loading...')
    }
}