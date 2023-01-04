function serach(arr1, arr2) {

    let neededEl = arr2.shift();
    let deletedEl = arr2.shift();
    let searchedNum = arr2.shift()

    let newArr = arr1.splice(0, neededEl);
    newArr.splice(0, deletedEl);

    let counter = 0;
    for (let el of newArr) {
        if (+el === +searchedNum) {
            counter++
        }
    }
    console.log(`Number ${searchedNum} occurs ${counter} times.`);
}