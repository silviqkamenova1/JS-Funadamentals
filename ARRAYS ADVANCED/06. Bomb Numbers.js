function bomb(arr, nums) {
    let specialNum = +nums[0]
    let power = +nums[1]

    for (let i = 0; i < arr.length; i++) {
        if (+arr[i] === +specialNum) {
            let start = i - power
            let bombLength = +power * 2 + 1
            while (start < 0) {
                start++;
                bombLength--
            }
            arr.splice(start, bombLength);
            i--
        }
    }
    let sum = 0
    for (let el of arr) {
        sum += el
    }
    console.log(sum);
}