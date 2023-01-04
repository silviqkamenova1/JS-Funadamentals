function occurrences(string) {
    let newString = string.toLowerCase().split(' ')

    let list = {};
    for (let i = 0; i < newString.length; i++) {
        if (!list.hasOwnProperty(newString[i])) {
            list[newString[i]] = 0
        }
        list[newString[i]] += 1
    }

    let arr = []
    for (let el of Object.entries(list)) {
        if (el[1] % 2 !== 0) {
            arr.push(el[0]);
        }
    }
    console.log(arr.join(' '));
}
occurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#')