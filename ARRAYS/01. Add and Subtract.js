function solve(nums) {
    let resultArray = []
    let originalSum = 0;
    let newSum = 0;
    for (i = 0; i < nums.length; i++) {

        let currentNum = nums[i]

        let odd = currentNum - i;
        let even = currentNum + i;

        if (currentNum % 2 === 0) {
            resultArray.push(even)
        } else {
            resultArray.push(odd)
        }
        originalSum += currentNum;
        newSum += resultArray[i]
    }
    console.log(resultArray);
    console.log(originalSum);
    console.log(newSum);

}