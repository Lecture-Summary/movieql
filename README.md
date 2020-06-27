## id 로 찾기

```js
import { people, getById } from "./db";

const resolvers = {
  Query: {
    people: () => people,
    person: (_, { id }) => getById(id),
  },
};

export default resolvers;
```

resolver.js 파일

```js
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
```

db.js 파일

```graphql
type Person {
  id: Int!
  name: String!
  age: Int!
  gender: String!
}

type Query {
  people: [Person]!
  person(id: Int!): Person
}
```

schema.graphql 파일

```
{
  person(id: 1){
    name
    gender
  }
}
```

playground Query문

```
{
  "data": {
    "person": {
      "name": "Daal",
      "gender": "male"
    }
  }
}
```

결과

## Mutation

```js
type Movie {
  id: Int!
  name: String!
  score: Int!
}

type Query {
  movies: [Movie]!
  movie(id: Int!): Movie
}

type Mutation {
  addMovie(name: String!, score: Int!): Movie!
}
```

schema.graphql에서 Mutation 정의

```js
export const addMovie = (name, score) => {
  const newMovie = {
    id: `${movies.length + 1}`,
    name,
    score,
  };
  movies.push(newMovie);
  return newMovie;
};
```

db.js 에서 addMovie 함수 생성

```js
import { getMovies, getById, addMovie } from "./db";

const resolvers = {
  Query: {
    movies: () => getMovies(),
    movie: (_, { id }) => getById(id),
  },
  Mutation: {
    addMovie: (_, { name, score }) => addMovie(name, score),
  },
};

export default resolvers;
```

resolver.js에서 Mutation에 addMovie 함수 추가

```js
mutation {
  addMovie(name: "RockandRolla", score: 9) {
    name
  }
}
```

playground에서의 mutation문

```js
{
  "data": {
    "addMovie": {
      "name": "RockandRolla"
    }
  }
}
```

결과 정상적으로 추가된 것을 볼 수 있음.

## Delete Mutation

```js
type Mutation {
  deleteMovie(id: Int!): Boolean!
}
```

schema.graphql 코드

```js
export const deleteMovie = (id) => {
  const cleanedMovies = movies.filter((movie) => movie.id !== id);
  if (movies.length > cleanedMovies.length) {
    movies = cleanedMovies;
    return true;
  } else {
    return false;
  }
};
```

db 코드

```js
import { deleteMovie } from "./db";

const resolvers = {
  Mutation: {
    deleteMovie: (_, { id }) => deleteMovie(id),
  },
};

export default resolvers;
```

resolvers.js 코드

playground에서 `mutation { deleteMovie(id: 3) }` 실행시 정상적으로 id가 3인게 삭제된다.
