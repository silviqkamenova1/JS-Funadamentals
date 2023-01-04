function adressBook(arr) {
    let list = {}
    for (let el of arr) {
        let [name, adres] = el.split(':');
        list[name] = adres
    }

    let unsorted = Object.keys(list)
    let sorted = unsorted.sort((a, b) => a.localeCompare(b));

    for (let el of sorted) {
        console.log(el, '->', list[el],);
}


}
adressBook(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd'])