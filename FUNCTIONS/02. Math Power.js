function power(num, raised) {
    //console.log(Math.pow(num, raised));
    let result = 1;
    for (let i = 0; i < raised; i++) {
        result *= num
    }
    console.log(result);
}