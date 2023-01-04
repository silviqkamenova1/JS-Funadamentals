function phoneBook(arr) {
    // let phoneBook = {}
    // for (let el of arr) {
    //     let info = el.split(' ');
    //     let name = info[0];
    //     let phone = info[1];
    //     phoneBook[name] = phone
    // }
    // for (let el in phoneBook) {
    //     console.log(el, '->', phoneBook[el]);
    // }
    let phoneBook = new Map();
    for (let el of arr) {
        let [name, phone] = el.split(' ');
        phoneBook.set(name, phone)
    }
    for (let key of phoneBook.keys()) {
        console.log(key, '->', phoneBook.get(key));
    }
}
phoneBook(['Tim 0834212554',
    'Peter 0877547887',
    'Bill 0896543112',
    'Tim 0876566344']
)