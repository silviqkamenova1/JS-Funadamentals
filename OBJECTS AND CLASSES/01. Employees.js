function employees(arr) {
    for (let i = 0; i < arr.length; i++) {
        let emplName = arr[i]
        let nameLength = emplName.length

        let object = {
            name: emplName,
            personalNumber: nameLength
        }
        console.log(`Name: ${object.name} -- Personal Number: ${object.personalNumber}`);
    }
}