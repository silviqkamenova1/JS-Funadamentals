function companyUsers(arr) {
    let list = {}
    for (let el of arr) {
        let [company, id] = el.split(' -> ')
        if (!list.hasOwnProperty(company)) {
            list[company] = []
        }
        list[company].push(id)
    }
    let unsorted = Object.entries(list)
    let sorted = unsorted.sort((a, b) => a[0].localeCompare(b[0]))
    for (let el of sorted) {
        console.log(el[0]);
        for (let i = 0; i < el[1].length; i++) {
            let number = el[1][i]
            if (el[1].indexOf(number) === i) {
                console.log(`-- ${number}`);

            }
        }
    }
}
companyUsers([
    'SoftUni -> AA12345',
    'SoftUni -> CC12344',
    'Lenovo -> XX23456',
    'SoftUni -> AA12345',
    'Movement -> DD11111'
])