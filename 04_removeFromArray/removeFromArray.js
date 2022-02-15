const removeFromArray = function(array) {
    let args = Array.from(arguments);
    for (let i = 1; i < args.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if (args[i] === array[j]) {
                array.splice(j, 1);
            }
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
