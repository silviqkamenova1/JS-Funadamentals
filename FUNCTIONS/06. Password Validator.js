function passwordValid(pass) {

    function isLengthBtwSixSeven(string) {
        if (string.length >= 6 && string.length <= 10) {
            return true;
        } else {
            return false;
        }
    }
    function consistLettersDigits(string) {
        for (let char of string) {
            let charCode = char.charCodeAt(0);
            if (!(charCode >= 48 && charCode <= 57) &&
                !(charCode >= 65 && charCode <= 90) &&
                !(charCode >= 97 && charCode <= 122)
            ) {
                return false;
            }
        }
        return true;
    }

    function hasTwoDigits(string) {
        let counter = 0;
        for (let char of string) {
            let charCode = char.charCodeAt(0);
            if (charCode >= 48 && charCode <= 57) {
                counter++
            }
        }
        if (counter >= 2) {
            return true;
        } else {
            return false;
        }
    }

    let isLengthValid = isLengthBtwSixSeven(pass);
    let containLetterDigits = consistLettersDigits(pass);
    let containTwoDigits = hasTwoDigits(pass);

    if (isLengthValid && containLetterDigits && containTwoDigits) {
        console.log('Password is valid');
        return;
    }
    if (!isLengthValid) {
        console.log("Password must be between 6 and 10 characters");
    }
    if (!containLetterDigits) {
        console.log("Password must consist only of letters and digits");
    }
    if (!containTwoDigits) {
        console.log("Password must have at least 2 digits");
    }
}