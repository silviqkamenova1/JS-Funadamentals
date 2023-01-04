function carWash(arr) {
    let cleaned = 0
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i]
        if (command === 'soap') {
            cleaned += 10
        } else if (command === 'water') {
            cleaned += (cleaned * (20 / 100))
        } else if (command === 'vacuum cleaner') {
            cleaned += (cleaned * (25 / 100))
        } else if (command === 'mud') {
            cleaned -= (cleaned * (10 / 100))
        }
    }
    console.log(`The car is ${cleaned.toFixed(2)}% clean.`);
}