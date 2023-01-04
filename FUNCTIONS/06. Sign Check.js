function signCheck(n1, n2, n3) {
    function multiply(n1, n2, n3) {
        return n1 * n2 * n3;
    }
    let result = multiply(n1, n2, n3)
    console.log(result > 0 ? 'Positive':'Negative');
}