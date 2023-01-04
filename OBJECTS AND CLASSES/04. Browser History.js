function history(object, string) {
    let name = object['Browser Name']
    let openTabs = object['Open Tabs']
    let recentlyClosed = object['Recently Closed']
    let browserLogs = object['Browser Logs']
    let commands = [];
    for (let el of string) {
        commands.push(el)
    }
 
    for (let i = 0; i < commands.length; i++) {
 
 
        let info = commands[i].split(' ')
        let command = info.shift();
        let name = [...info].join('')
 
        if (command === 'Open') {
            if (!openTabs.includes(name)) {
                openTabs.push(name);
                browserLogs.push(commands[i])
            }
        } else if (command === 'Close') {
            if (openTabs.includes(name)) {
                let index = openTabs.indexOf(name)
                let closedTab = openTabs.splice(index, 1)
                if (!recentlyClosed.includes(name)) {
                    recentlyClosed.push(name)
                    browserLogs.push(commands[i])
                }
            }
        } else if (command === 'Clear') {
            openTabs = [];
            recentlyClosed = [];
            browserLogs = [];
        }
    }
 
    console.log(`${name}`);
    console.log(`Open Tabs: ${openTabs.join(', ')}`);
    console.log(`Recently Closed: ${recentlyClosed.join(', ')}`);
 
    let list = []
    for (let i = 0; i < browserLogs.length; i++) {
        let [command, ...name] = browserLogs[i].split(' ')
        if (name.length === 2) {
            let names = name.toString();
            let namesV = names.split(",")
            list.push(` ${command} ${namesV[0]} ${namesV[1]}`)
        } else {
            list.push(` ${command} ${name}`)
        }
    }
    console.log(`Browser Logs:${list}`);
 
}
history({"Browser Name":"Mozilla Firefox",
"Open Tabs":["YouTube"],
"Recently Closed":["Gmail", "Dropbox"],
"Browser Logs":["Open Gmail", "Close Gmail", "Open Dropbox", "Open YouTube", "Close Dropbox"]},
["Open Wikipedia", "Clear History and Cache", "Open Twitter"])
// history({"Browser Name":"Google Chrome","Open Tabs":["Facebook","YouTube","Google Translate"],
// "Recently Closed":["Yahoo","Gmail"],
// "Browser Logs":["Open YouTube","Open Yahoo","Open Google Translate","Close Yahoo","Open Gmail","Close Gmail","Open Facebook"]},
// ["Close Facebook", "Open StackOverFlow", "Open Google"])