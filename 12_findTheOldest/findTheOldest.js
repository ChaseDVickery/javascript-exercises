const findTheOldest = function(people) {
    return people.reduce((oldest, current) => {
        let oldDeath = oldest.yearOfDeath ? oldest.yearOfDeath : new Date().getFullYear();
        let currDeath = current.yearOfDeath ? current.yearOfDeath : new Date().getFullYear();
        if ((currDeath - current.yearOfBirth) > (oldDeath - oldest.yearOfBirth)) {
            return current;
        }
        return oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
