function cardGame(arr) {
    let powerList = {
        'J': 11, 'Q': 12, 'K': 13, 'A': 14,
        'S': 4, 'H': 3, 'D': 2, 'C': 1
    }
    let players = {}
    for (let i = 0; i < arr.length; i++) {
        let info = arr[i].split(': ')
        let playerName = info[0]
        let cards = info[1].split(', ')
        if (!players.hasOwnProperty(playerName)) {
            players[playerName] = []
        }
        players[playerName] = players[playerName].concat(cards)
    }

    let finalResult = {}
    for (let [name, cardOfPlayer] of Object.entries(players)) {
        // let name = name
        // let newValues = card.split(', ')
        finalResult[name] = 0
        for (let i = 0; i < cardOfPlayer.length; i++) {
            let card = cardOfPlayer[i];
            if (cardOfPlayer.indexOf(card) === i) {
                let currentCard = card.split('');
                let type = currentCard.pop();
                let power = currentCard.join('');
                let points = 0;

                if (Object.keys(powerList).includes(power)) {
                    points = powerList[power] * powerList[type]
                    //finalResult[name] = finalResult[name] + points
                } else {
                    points = +power * powerList[type]
                    //finalResult[name] = finalResult[name] + points
                }
                finalResult[name] += points
            }
        }
    }
    for (let [key, value] of Object.entries(finalResult)) {
        console.log(`${key}: ${value}`);
    }

}
cardGame([
    'John: 2C, 4H, 9H, AS, QS',
    'Slav: 3H, 10S, JC, KD, 5S, 10S',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Slav: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'Alex: 6H, 7S, KC, KD, 5S, 10C',
    'Thomas: QH, QC, JS, JD, JC',
    'John: JD, JD, JD, JD',
    'Todor: 2C'
])