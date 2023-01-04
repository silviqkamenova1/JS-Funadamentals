function solve(num) {
    let n = Number(num)

    for (i = 97; i < 97 + n; i++) {
        for (j = 97; j < 97 + n; j++) {
            for (k = 97; k < 97 + n; k++) {
                console.log(String.fromCharCode(i) + String.fromCharCode(j) + String.fromCharCode(k));
            }
        }
    }

}