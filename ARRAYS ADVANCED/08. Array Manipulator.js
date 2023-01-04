function manipulatorArr(arr, manipulations) {
    for (let i = 0; i < manipulations.length; i++) {
        let command = manipulations[i].split(' ');
        if (command[0] === 'add') {
            let index = +command[1];
            let element = +command[2]
            arr.splice(index, 0, element);
        } else if (command[0] === 'addMany') {
            let index = +command[1];
            command.splice(0, 2) // delete first two el from the array
            let numbers = command.map(Number);
            arr.splice(index, 0, ...numbers)
        } else if (command[0] === 'contains') {
            if (arr.includes(+command[1])) {
                console.log(arr.indexOf(+command[1]));
            } else {
                console.log('-1');
            }
        } else if (command[0] === 'remove') {
            let index = +command[1];
            arr.splice(index, 1);
        } else if (command[0] === 'shift') {
            let position = +command[1];
            for (let i = 0; i < position; i++) {
                let number = arr.shift();
                arr.push(number)
            }
        } else if (command[0] === 'sumPairs') {
            if (arr.length % 2 !== 0) {
                arr.push(0);
            }
            let newArr = []
            let sum = 0;
            for (let i = 0; i < arr.length; i += 2) {
                sum = +arr[i] + +arr[i + 1];
                newArr.push(sum);
            }
            arr = newArr;
        } else if (command[0] === 'print') {
            console.log(`[ ${arr.join(', ')} ]`);
        }
    }
}