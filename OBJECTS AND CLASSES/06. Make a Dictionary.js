function makeDictionary(array) {

    //let dictionary = [];
    let object = {}
    for (let el of array) {
        let arr = JSON.parse(el)
        object = Object.assign(object, arr)
    }

    // let [terms, description] = arr.split(': ')

    // object.term = terms
    // object.definition = description

    // let object = {
    //     term: terms,
    //     definition:description,
    // }
    //dictionary.push(object)

    let sorted = Object.keys(object).sort((a, b) => a.localeCompare(b))
    for (let el of sorted) {
        let definition = object[el]
        console.log(`Term: ${el} => Definition: ${definition}`);
    }


}
makeDictionary([
    '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
    '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
    '{"Boiler":"A fuel-burning apparatus or container for heating water."}',
    '{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
    '{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
)