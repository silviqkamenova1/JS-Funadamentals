function modernTimes(string) {
    let arr = string.split(' ')
    let list = ''
    for (let el of arr) {
        if (el.startsWith('#') && el.length > 1) {
            let isLetter = true;
            for (let i = 1; i < el.length; i++) {
                if (el.charCodeAt(i) < 65 || el.charCodeAt(i) > 122) {
                    isLetter = false;
                    break;
                }
            }
            if (isLetter) {
                console.log(el.slice(1));
            }
            // if(el.includes(/[A-Z]/g || /[a-z]/g)) {
            //     list += `${el}`
            // }
        }
    }


}
modernTimes('Nowadays everyone uses # to tag a #special word in #socialMedia')