function validation(arr) {
    let x1 = arr[0];
    let y1 = arr[1];

    let x2 = arr[2];
    let y2 = arr[3];


    function point1() {
        let formula1 = Math.sqrt(Math.pow(x1, 2) + Math.pow(y1, 2));
        return formula1;
    }
    function point2() {
        let formula2 = Math.sqrt(Math.pow(x2, 2) + Math.pow(y2, 2));
        return formula2;
    }
    function point3() {
        let formula3 = Math.sqrt(Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2))
        return formula3;
    }

    let result1 = point1(arr);
    let result2 = point2(arr);
    let result3 = point3(arr);

    if (result1 === Math.trunc(result1)) {
        console.log(`{${x1}, ${y1}} to {0, 0} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {0, 0} is invalid`);
    }
    if (result2 === Math.trunc(result2)) {
        console.log(`{${x2}, ${y2}} to {0, 0} is valid`);
    } else {
        console.log(`{${x2}, ${y2}} to {0, 0} is invalid`);
    }
    if (result3 === Math.trunc(result3)) {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is valid`);
    } else {
        console.log(`{${x1}, ${y1}} to {${x2}, ${y2}} is invalid`);
    }
}