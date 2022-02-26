const palindromes = function (string) {
    const array = [];
    for (i = 0; i < string.length; i++) {
        if (string.charAt(i) !== ' ' && 
                string.charAt(i) !== '.' &&
                string.charAt(i) !== ',' && 
                string.charAt(i) !== '!') {
            array.push(string.charAt(i).toLowerCase());
        }
    }
    return array.every((char, index) => {
        if (char === array[array.length - 1 - index]) return true;
    })
};

// Do not edit below this line
module.exports = palindromes;
