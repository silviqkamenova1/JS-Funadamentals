function occurrences(arr) {
    let list = {}
    for (let el of arr) {
        if (!list.hasOwnProperty(el)) {
            list[el] = 1
        } else {
            list[el] += 1
        }
    }

    let entries = Object.entries(list)
    let sorted = entries.sort((a, b) => {
        return b[1] - a[1]
    })

    for (let [key,values] of sorted) {
        console.log(`${key} -> ${values} times`);
    }
}
occurrences(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"])