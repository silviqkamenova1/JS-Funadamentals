function solve(games) {
    let account = games.shift().split(' ')
    let instal = 0
    for (let i = 0; i < games.length; i++) {
        let command = games[i].split(' ')

        if (!command.includes('Play!')) {
            if (command[0].includes('Install')) {
                if (account.includes(command[1])) {
                    continue;
                } else {
                    instal++
                    if (instal === 1) {
                        account.push(command[1])
                    }
                }
            } else if (command[0].includes('Uninstall')) {
                if (account.includes(command[1])) {
                    let cutindex = account.indexOf(command[1])
                    account.splice(cutindex, 1)
                }
            } else if (command[0].includes('Update')) {
                if (account.includes(command[1])) {
                    let fromIndex = account.indexOf(command[1]);
                    let toIndex = account.length - 1;
                    let index = account.splice(fromIndex, 1);
                    account.splice(toIndex, 0, index);
                    //account.push(command[1])
                }

            } else if (command[0].includes('Expansion')) {
                let nameGame = command[1];
                let expansionGame = nameGame.split('-');
                let name = expansionGame[0];
                if (account.includes(name)) {
                    let index = account.indexOf(name);
                    let expansion = expansionGame[1]
                    account.splice(index + 1, 0, `${name}:${expansion}`)
                }
            }
        } else {
            console.log(account.join(' '));
            return;
        }
    }
}