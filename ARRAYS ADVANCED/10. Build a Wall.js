function buildWall(array) {
    let arr = array.map(Number)
    // for (let el of array) (
    //     arr.push(+el + 1)
    // )
    let crews = arr.filter(len => len < 30).length
    let cubic = []
    let totalYards = 0
    let pesos = 0
    while (crews > 0) {
        let cubicYards = 0;
        for (let i = 0; i < arr.length; i++) {
            //let currentCrewe = +arr[i];
            if (arr[i] !== 30) {
                arr[i]++
                cubicYards += 195
                if (arr[i] == 30) {
                    crews--
                }
            }
        }
        totalYards += cubicYards
        cubic.push(cubicYards)
    }
    pesos = totalYards * 1900;
    console.log(cubic.join(", "));
    console.log(`${pesos} pesos`);

}