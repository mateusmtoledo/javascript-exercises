const repeatString = function(string, num) {
    if (num >=0 ) {
        let result = '';
        for (i = 1; i <= num; i++){
            result += string;
        }
        return result;
    }
    else return 'ERROR';
};

// Do not edit below this line
module.exports = repeatString;
