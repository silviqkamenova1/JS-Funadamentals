function gladiator(arr) {
    let iventory = arr.shift().split(' ');
    for (let i = 0; i < arr.length; i++) {
        let command = arr[i].split(' ');
        if (command[0] === 'Buy') {
            if (!iventory.includes(command[1])) {
                iventory.push(command[1])
            } else {
                continue;
            }
        } else if (command[0] === 'Trash') {
            if (iventory.includes(command[1])) {
                let index = iventory.indexOf(command[1]);
                iventory.splice(index, 1)
            }
        } else if (command[0] === 'Repair') {
            if (iventory.includes(command[1])) {
                let index = iventory.indexOf(command[1]);
                let repair = iventory.splice(index, 1);
                iventory.push(repair)
            }
        } else if (command[0] === 'Upgrade') {
            let newCommand = command[1].split('-');
            let equipment = newCommand[0];
            let upgrade = newCommand[1]
            if (iventory.includes(equipment)) {
                let index = iventory.indexOf(equipment) + 1;
                iventory.splice(index, 0, `${equipment}:${upgrade}`)
            }
        }


    }
    console.log(iventory.join(' '));
}