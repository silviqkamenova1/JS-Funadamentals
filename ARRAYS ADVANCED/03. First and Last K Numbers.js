function firstLastNum(arr) {
    let k = arr.shift();
    let new1 = arr.slice(0, k);
    let new2 = arr.slice(-k)
    // for (let i = 0; i < k; i++) {
    //     new1.push(Number(arr[i]))
    // }
    // for (let j = k; j > 0; j--) {
    //     new2.push(Number(arr[j]))
    // }
    console.log(new1.join(' '));
    console.log(new2.join(' '));
}