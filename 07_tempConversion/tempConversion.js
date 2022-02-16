const ftoc = function(tempF) {
  return roundOnePlace((tempF-32)*5/9);
};

const ctof = function(tempC) {
  return roundOnePlace(tempC*9/5+32);
};

const roundOnePlace =function(num) {
  return Math.round(num*10)/10;
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
