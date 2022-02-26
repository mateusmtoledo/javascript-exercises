const findTheOldest = function(people) {
    return people.reduce((oldest, person) => {
        if(((oldest.yearOfDeath || 2022) - oldest.yearOfBirth) < ((person.yearOfDeath || 2022) - person.yearOfBirth)) {
            return person;
        }
        else return oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;