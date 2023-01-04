function palindrome(arr) {
    for (let el of arr) {
        let integer = String(el)
        let palidrome = String(el).split('').reverse().join('');

        if (integer === palidrome) {
            console.log(true);
        } else {
            console.log(false);
        }
    }
}