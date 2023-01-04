function solve(rooms) {
    let health = 100
    let coins = 0;
    let roomsCount = 0

    let array = rooms[0].split('|');

    for (i = 0; i < array.length; i++) {
        let contain = array[i].split(' ');
        let firstPart = contain[0];
        let secondPart = Number(contain[1]);
        roomsCount++

        if (firstPart === 'potion') {
            if (health + secondPart > 100) {
                secondPart = 100 - health
                health = 100
            } else {
                health += secondPart
            }
            console.log(`You healed for ${secondPart} hp.`);
            console.log(`Current health: ${health} hp.`);
        } else if (firstPart === 'chest') {
            coins += Number(secondPart);
            console.log(`You found ${Number(secondPart)} coins.`);
        } else {
            health -= Number(secondPart);
            if (health > 0) {
                console.log(`You slayed ${firstPart}.`);
            } else {
                console.log(`You died! Killed by ${firstPart}.`);
                console.log(`Best room: ${roomsCount}`)
                return;
            }
        }
    }
    console.log(`You've made it!`);
    console.log(`Coins: ${coins}`);
    console.log(`Health: ${health}`);


}