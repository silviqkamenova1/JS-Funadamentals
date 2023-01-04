function convert(string) {
    let info = JSON.parse(string);
    for (let key of Object.keys(info)) {
        console.log(`${key}: ${info[key]}`);
    }


}