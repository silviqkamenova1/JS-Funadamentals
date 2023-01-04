function train(arr) {
    let wagons = arr.shift(0).split(' ').map(Number)
    let maxCapacity = +arr.shift(0)

    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');
        if (command[0] === 'Add') {
            wagons.push(+command[1])
        } else {
            for (let j = 0; j < wagons.length; j++) {
                let currentCount = +wagons[j];
                if ((currentCount + +command[0]) <= maxCapacity) {
                    wagons[j] += +command[0];
                    break;
                }
            }
        }
    }
    console.log(wagons.join(' '));
}