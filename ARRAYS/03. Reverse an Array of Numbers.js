function reverse(n, numbers) {
    let res = []
    //let res = ''
    for (i = n - 1; i >= 0; i--) {
        //res += `${numbers[i]} `
        res.push(numbers[i])
    }
    console.log(res.join(' '));
    //console.log(res);
}