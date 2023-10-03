const person = {
  id: 1,
  firstName: 'Mario',
  lastName: 'Rossi',
  age: 25,
};

const filteredObject = {
  id: person.id,
  age: person.age
};

const json = JSON.stringify(person);

console.log(json); // Should return: { id: 1, age: 25 }