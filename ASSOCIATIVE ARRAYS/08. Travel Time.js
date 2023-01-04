function travelTime(arr) {
    let list = {}
    for (let el of arr) {
        let info = el.split(' > ')
        let country = info[0];
        let city = info[1];
        let price = +info[2]

        if (!list.hasOwnProperty(country)) {
            list[country] = {}
        }
        if (!list[country].hasOwnProperty(city)) {
            list[country][city] = price
        }

        if (price < list[country][city]) {
            list[country][city] = price
        } 
    }
    let sorted = Object
        .entries(list)
        .sort((a, b) => 
            a[0].localeCompare(b[0]) ||
            Object.values(a[1]).reduce((x, y) => x + y) - Object.values(b[1]).reduce((x, y) => x + y))
    for (let [country,city] of sorted) { 
      
        let townString = Object.entries(city).map(x => `${x[0]} -> ${x[1]}`);
        console.log(`${country} -> ${townString.join(' ')}`);
    }
// judge 80/100
}
travelTime([
    "Bulgaria > Sofia > 500",
    "Bulgaria > Sopot > 800",
    "France > Paris > 2000",
    "Albania > Tirana > 1000",
    "Bulgaria > Sofia > 200"
])