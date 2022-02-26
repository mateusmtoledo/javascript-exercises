const fibonacci = function(num) {
    if (num < 0) return "OOPS";
    const array = [1, 1];
    for (i = 2; i < num; i++) {
        array.push(array[1]+array[0]);
        array.shift();
    }
    return array[1];
};

// Do not edit below this line
module.exports = fibonacci;
