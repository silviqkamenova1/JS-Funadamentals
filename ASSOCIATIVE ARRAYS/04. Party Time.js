function partyTime(arr) {
    let partyList = arr.indexOf('PARTY')
    let listGuests = arr.splice(0, partyList)
    let command = arr.shift()

    for (let k = 0; k < arr.length; k++) {
        let guest = arr[k]
        if (listGuests.includes(guest)) {
            let index = listGuests.indexOf(guest)
            listGuests.splice(index, 1)
        } else {
            continue;
        }
    }

    let list = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
    let vip = [];
    let regular = []
    for (let el of listGuests) {
        if (list.includes(el[0])) {
            vip.push(el)
        } else {
            regular.push(el)
        }
    }
    console.log(listGuests.length);
    if (vip.length > 0) {
        console.log(vip.join('\n'));
    }
    if (regular.length > 0) {
        console.log(regular.join('\n'));
    }
}
partyTime(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
])