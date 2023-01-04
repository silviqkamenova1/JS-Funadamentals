function towns(arr) {
    for (let el of arr) {
        let cityInfo = el.split(' |');
        let town = cityInfo[0];
        let latitude = +cityInfo[1];
        let longitude = +cityInfo[2]

        let object = {
            town,
            latitude: latitude.toFixed(2),
            longitude: longitude.toFixed(2)
        }
        console.log(object);
    }


}