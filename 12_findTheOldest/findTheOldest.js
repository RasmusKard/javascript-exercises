const findTheOldest = function (people) {
	people.sort((aPerson, bPerson) => {
		checkIfHasDeathYear(aPerson);
		checkIfHasDeathYear(bPerson);

		const aPersonAge = aPerson.yearOfDeath - aPerson.yearOfBirth;
		const bPersonAge = bPerson.yearOfDeath - bPerson.yearOfBirth;

		return bPersonAge - aPersonAge;
	});
	return people[0];
};

const checkIfHasDeathYear = (person) => {
	if (!person.yearOfDeath) {
		person.yearOfDeath = new Date().getFullYear();
	}
};

// Do not edit below this line
module.exports = findTheOldest;
