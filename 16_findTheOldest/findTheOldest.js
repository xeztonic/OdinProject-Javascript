const getAge = function (birth, death) {
    if (!death) {
        death = new Date().getFullYear();
    }
    return death - birth;
};

const findTheOldest = function (people) {
    let oldest = people[0];

    for (let i = 1; i < people.length; i++) {
        const person = people[i];
        const oldestAge = getAge(oldest.yearOfBirth, oldest.yearOfDeath);
        const personAge = getAge(person.yearOfBirth, person.yearOfDeath);

        if (personAge > oldestAge) {
            oldest = person;
        }
    }

    return oldest;
};

// Do not edit below this line
module.exports = findTheOldest;
