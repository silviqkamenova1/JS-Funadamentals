function list(arr) {
    let order = arr.sort()

    for (let i = 1; i <= order.length; i++) {
        console.log(`${i}.${order[i - 1]}`);
    }

}