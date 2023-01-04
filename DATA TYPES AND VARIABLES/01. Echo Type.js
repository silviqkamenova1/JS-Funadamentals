function solve(parameter) {
    let type = typeof (parameter)
    console.log(type === 'string' || type === 'number'
        ? `${type} \n${parameter}`
        : `${type} \nParameter is not suitable for printing`);


}