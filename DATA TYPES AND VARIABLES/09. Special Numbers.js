function solve(n) {
    let sum = 0;
    let buff = '';
    for (i = 1; i <= n; i++) {
        i = String(i);
        for (j = 0; j < i.length; j++) {
            sum += Number(i[j]);
        }
        buff = sum === 5 || sum === 7 || sum === 11;
        console.log(buff ? `${i} -> True` : `${i} -> False`);
        sum = 0
    }



}