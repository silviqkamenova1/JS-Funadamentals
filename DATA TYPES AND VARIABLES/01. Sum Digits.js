function solve(num) {
    let numToString = String(num);
    
    let buff = 0
    for(i = 0; i < numToString.length; i ++) {
        buff += Number(numToString[i])
    }
    
    console.log(buff);
    }