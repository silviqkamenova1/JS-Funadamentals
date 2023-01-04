function primeNum(num) {
    let prime = true;
    if (num > 1) {

        for (i = 2; i <= num; i++) {
            if (num % i == 0) {
                prime = false;
            }
            break;
        }
    } else {
        prime = false
    }
    if (prime) {
        console.log('true');
    } else {
        console.log('false');
    }

}