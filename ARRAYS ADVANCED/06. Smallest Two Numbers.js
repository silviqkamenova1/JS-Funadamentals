function smallestTwoNums(arr) {
    let smallest = arr.sort((a, b) => a - b)
    console.log(smallest[0] + ' ' + smallest[1])
}