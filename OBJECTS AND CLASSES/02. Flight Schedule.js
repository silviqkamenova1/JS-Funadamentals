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
flightSchedule([['WN269 Delaware',
    'FL2269 Oregon',
    'WN498 Las Vegas',
    'WN3145 Ohio',
    'WN612 Alabama',
    'WN4010 New York',
    'WN1173 California',
    'DL2120 Texas',
    'KL5744 Illinois',
    'WN678 Pennsylvania'],
['DL2120 Cancelled',
    'WN612 Cancelled',
    'WN1173 Cancelled',
    'SK430 Cancelled'],
['Cancelled']
]
)
// flightSchedule([['WN269 Delaware',
//     'FL2269 Oregon',
//     'WN498 Las Vegas',
//     'WN3145 Ohio',
//     'WN612 Alabama',
//     'WN4010 New York',
//     'WN1173 California',
//     'DL2120 Texas',
//     'KL5744 Illinois',
//     'WN678 Pennsylvania'],
// ['DL2120 Cancelled',
//     'WN612 Cancelled',
//     'WN1173 Cancelled',
//     'SK330 Cancelled'],
// ['Ready to fly']
// ]
//)