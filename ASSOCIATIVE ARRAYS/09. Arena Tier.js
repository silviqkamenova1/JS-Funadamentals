function arena(arr) {
    let pool = {}

    for (let el of arr) {
        if (el !== 'Ave Cesar') {
            if (el.includes(' -> ')) {
                let info = el.split(' -> ');
                let [gladiator, technique, skill] = info
                if (!pool.hasOwnProperty(gladiator)) {
                    pool[gladiator] = []
                    pool[gladiator][technique] = +skill
                }
                if (!pool[gladiator].hasOwnProperty(technique)) {
                    pool[gladiator][technique] = +skill
                } else {
                    let oldSkill = pool[gladiator][technique]
                    if (oldSkill < +skill) {
                        pool[gladiator][technique] = +skill
                    }
                }
            } else if (el.includes(' vs ')) {
                let info = el.split(' vs ')
                let [name1, name2] = info
                if (pool.hasOwnProperty(name1) && pool.hasOwnProperty(name2)) {
                    for (let el1 of Object.entries(pool[name1])) {
                        if (pool[name2].hasOwnProperty(el1[0])) {
                            let technique = el1[0]
                            if (pool[name1][technique] > pool[name2][technique]) {
                                delete pool[name2]
                            } else {
                                delete pool[name1]
                            }
                        }
                    }
                }
            }
        }
    }
    let reducedSkill = {}
    for (let [key, value] of Object.entries(pool)) {
        let reduced = Object.values(value).reduce((a, b) => a + b)
        reducedSkill[key] = reduced
    }
    let sortedSkill = Object.entries(reducedSkill).sort((a, b) => {
        return b[1] - a[1] || a[0].localeCompare(b[0])
    })

    for (let el of sortedSkill) {
        let [key, value] = el
        console.log(`${key}: ${value} skill`);
        let entries = Object.entries(pool[key])
        let sortedSkill = entries.sort((a, b) => {
            return b[1] - a[1] || a[0].localeCompare(b[0])
        })
        for (let el of sortedSkill) {
            console.log(`- ${el[0]} <!> ${el[1]}`)
        }
    }

}

// arena([
//     'Peter -> BattleCry -> 400',
//     'Alex -> PowerPunch -> 300',
//     'Stefan -> Duck -> 200',
//     'Stefan -> Tiger -> 250',
//     'Ave Cesar'
// ])
arena([
    'Peter -> Duck -> 400',
    'Julius -> Shield -> 150',
    'Gladius -> Heal -> 200',
    'Gladius -> Support -> 250',
    'Gladius -> Shield -> 250',
    'Peter vs Gladius',
    'Gladius vs Julius',
    'Gladius vs Maximilian',
    'Ave Cesar'
])
