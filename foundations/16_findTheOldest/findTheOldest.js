const findTheOldest = function (people) {
  const ordered = people.sort((a, b) => {
    currentYear = new Date().getFullYear();
    firstPerson = 0;
    nextPerson = 0;

    if (a.yearOfDeath === undefined) {
      firstPerson = currentYear - a.yearOfBirth;
    }
    if (b.yearOfDeath === undefined) {
      nextPerson = currentYear - b.yearOfBirth;
    }
    if (a.yearOfDeath !== undefined) {
      firstPerson = a.yearOfDeath - a.yearOfBirth;
    }
    if (b.yearOfDeath !== undefined) {
      nextPerson = b.yearOfDeath - b.yearOfBirth;
    }
    return nextPerson - firstPerson;
  });
  return ordered[0];
};

// Do not edit below this line
module.exports = findTheOldest;
