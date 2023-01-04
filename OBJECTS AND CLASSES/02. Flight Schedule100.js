function flightSchedule(arr) {
    let flightList = arr[0]
    let newFlights = arr[1]
    let flightStatus = String(arr[2])
 
    let cancelledFilghts = []
    let notChangedFlights = []
 
    for (let i = 0; i < flightList.length; i++) {
        let [flights, ...country] = flightList[i].split(' ')
        for (let j = 0; j < newFlights.length; j++) {
            let [sector, ...status] = newFlights[j].split(' ')
            if (flights === sector) {
                let object = {
                    Destination: country.join(' '),
                    Status: flightStatus
                }
                cancelledFilghts.push(object);
            }
        }
    }
 
    if (flightStatus === 'Ready to fly') {
        for (let i = 0; i < flightList.length; i++) {
            let [flights, ...country] = flightList[i].split(' ')
            for (let j = 0; j < newFlights.length; j++) {
                let [sector, ...status] = newFlights[j].split(' ')
                if (flights === sector) {
                    flightList.splice(i, 1)
                }
            }
        }
        for (let el of flightList) {
            let [sector, ...country] = el.split(' ')
            let object = {
                Destination: country.join(' '),
                Status: flightStatus
            }
            notChangedFlights.push(object)
        }
 
        notChangedFlights.forEach(element => {
            console.log(element);
        });
    } else {
        cancelledFilghts.forEach(element => {
            console.log(element);
        });
    }
}