function schoolGrade(arr) {
    let gradesList = {};

    for (let i = 0; i < arr.length; i++) {
        let info = arr[i].split(' ')
        let name = info.shift()
        let grades = info.join(' ')

        if (!gradesList.hasOwnProperty(name)) {
            gradesList[name] = grades
        } else {
            let oldGrades = gradesList[name]
            gradesList[name] = oldGrades + ' ' + grades
        }
    }
    let entries = Object.entries(gradesList)
    let sorted = entries.sort(([keyA, valueA], [keyB, valueB]) => {
        return keyA.localeCompare(keyB)
    })
    for (let [name, grade] of sorted) {
        let newGrade = grade.split(' ')
        let sum = 0
        for (let el of newGrade) {
            sum += +el
        }
        let avg = sum / newGrade.length
        console.log(`${name}: ${avg.toFixed(2)}`);
    }
}
schoolGrade(['Steven 3 5 6 4',
    'George 4 6',
    'Tammy 2 5 3',
    'Steven 6 3'])