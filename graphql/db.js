export const people = [
  {
    id: 0,
    name: "hojin",
    age: 24,
    gender: "male",
  },
  {
    id: 1,
    name: "Daal",
    age: 18,
    gender: "male",
  },
  {
    id: 2,
    name: "JD",
    age: 20,
    gender: "female",
  },
  {
    id: 3,
    name: "flynn",
    age: 19,
    gender: "male",
  },
];

export const getById = (id) => {
  const filteredPeople = people.filter((person) => person.id === id);
  return filteredPeople[0];
};
