function solve(number) {
    let year = number * 100
    let days = Math.trunc(year * 365.2422)
    let hours = days * 24
    let min = hours * 60

    console.log(`${number} centuries = ${year} years = ${days} days = ${hours} hours = ${min} minutes`);

}