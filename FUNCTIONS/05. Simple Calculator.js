function calculator(num1, num2, operator) {
    /* function multiply(num1, num2) {
         let res;
         switch (operator) {
             case 'multiply': return res = num1 * num2;
             case 'divide': return res = num1 / num2;
             case 'add': return res = num1 + num2;
             case 'subtract': return res = num1 - num2;
         }
 
     }
     let calculation = multiply(num1, num2);
     console.log(calculation);*/
    let operators = {
        'multiply': (num1, num2) => num1 * num2,
        'divide': (num1, num2) => num1 / num2,
        'add': (num1, num2) => num1 + num2,
        'subtract': (num1, num2) => num1 - num2,
    }

    console.log(operators[operator](num1, num2));
}