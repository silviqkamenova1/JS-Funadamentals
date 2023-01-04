function school(arr) {
    let nextGrade = []
    for (i = 0; i < arr.length; i++) {
        let [strName, strGrade, strAvg] = arr[i].split(', ');
        let name = strName.split(': ')[1]
        let grade = +strGrade.split(': ')[1] + 1
        let score = +strAvg.split(': ')[1]
        if (score > 3.00) {
            let object = {
                name,
                score,
            }
            if (!nextGrade.hasOwnProperty(grade)) {
                nextGrade[grade] = []
            }
            nextGrade[grade].push(object)
        }

    }
    //let finalGrade = {}
    let sorted = Object.keys(nextGrade).sort((a,b) => a - b)
    let allNames = ''
    for (let el of sorted) {
        let infoStudent = nextGrade[el]
        console.log(`${el} Grade`);
        console.log(`List of students: ${infoStudent.map(i => i.name).join(', ')}`);
        console.log(`Average annual score from last year: ${avg(infoStudent.map(i => i.score)).toFixed(2)}`);
        console.log();
    }
    function avg(arr) {
        return arr.reduce((a, b) => a + b, 0) / arr.length;
    }
    // for(let el of nextGrade) {
    //     let score = 0;

    //     // if grade not excist
    //     if(!Object.values(finalGrade).includes(el.grade)){
    //         finalGrade.grade = {
    //             grede: el.grade
    //         }
    //     } else {
    //         finalGrade.name 
    //     }
    //     //if  excist
    //     //set name
    //     if(!Object.values(finalGrade.grade).includes(grade)) {
    //         finalGrade[name] = finalGrade.name + ',' + el.name
    //     }
    // }



}
school([
    "Student name: Mark, Grade: 8, Graduated with an average score: 4.75",
    "Student name: Ethan, Grade: 9, Graduated with an average score: 5.66",
    "Student name: George, Grade: 8, Graduated with an average score: 2.83",
    "Student name: Steven, Grade: 10, Graduated with an average score: 4.20",
    "Student name: Joey, Grade: 9, Graduated with an average score: 4.90",
    "Student name: Angus, Grade: 11, Graduated with an average score: 2.90",
    "Student name: Bob, Grade: 11, Graduated with an average score: 5.15",
    "Student name: Daryl, Grade: 8, Graduated with an average score: 5.95",
    "Student name: Bill, Grade: 9, Graduated with an average score: 6.00",
    "Student name: Philip, Grade: 10, Graduated with an average score: 5.05",
    "Student name: Peter, Grade: 11, Graduated with an average score: 4.88",
    "Student name: Gavin, Grade: 10, Graduated with an average score: 4.00"
]
)