function meetings(arr) {
    let list = {};
    for (let el of arr) {
        let [day, name] = el.split(' ');
        if (!Object.keys(list).includes(day)) {
            list[day] = name
            console.log(`Scheduled for ${day}`);
        } else {
            console.log(`Conflict on ${day}!`);
        }
    }
    for (let [key, value] of Object.entries(list)) {
        console.log(`${key} -> ${value}`);
    }
}
meetings(['Monday Peter',
    'Wednesday Bill',
    'Monday Tim',
    'Friday Tim'])