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

const json = JSON.stringify(filteredObject);

console.log(json);
