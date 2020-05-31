const hojin = {
  name: "hojin",
  age: 24,
  gender: "male",
};

const resolvers = {
  Query: {
    person: () => hojin,
  },
};

export default resolvers;
