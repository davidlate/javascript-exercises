const findTheOldest = function (people) {
  people.map((person) => {
    if (!isNaN(person.yearOfDeath))
      return (person.age = person.yearOfDeath - person.yearOfBirth);
    else return (person.age = new Date().getFullYear() - person.yearOfBirth);
  });

  const ageSort = people.sort((person1, person2) =>
    person1.age < person2.age ? 1 : -1
  );
  console.table(ageSort);
  console.table(ageSort[0].name);
  result = ageSort[0];
  console.log(result);
  return result;
};

// Do not edit below this line
module.exports = findTheOldest;
