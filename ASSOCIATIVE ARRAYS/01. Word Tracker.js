function tracker(arr) {
    let list = {}
    let occurrences = arr.shift().split(' ');

    for (let el of occurrences) {
        list[el] = 0
        for (let word of arr) {
            if (el === word) {
                list[el] += 1
            }
        }
    }
    let sorted = Object.entries(list).sort((a, b) => b[1] - a[1])
    for (let [key, value] of sorted) {
        console.log(`${key} - ${value}`);
    }

}
tracker([
    'is the',
    'first', 'sentence', 'Here', 'is', 'another', 'the', 'And', 'finally', 'the', 'the', 'sentence'])