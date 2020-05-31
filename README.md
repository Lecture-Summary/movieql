# movieql

Movie API with Graphql

##

https://github.com/prisma-labs/graphql-yoga

```ssh
yarn add graphql-yoga
```

GraphQL로 해결할 수 있는 두가지 문제

Over-fetching : 요청한 영역의 정보보다, 많은 정보를 서버에서 받는 것

Under-fetching : SNS 앱을 예로 들면 notification, users, feed 등을 불러오는 요청을 여러번 보내지만, GraphQL을 이용하면 이러한 정보를 한번의 요청으로 해결할 수 있다.

```js
import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

server.start(() => console.log("Graphql Server Running"));
```

index.js 내용

```js
type Query {
  name: String!
}
```

graphql/schema.graphql 내용

```js
const resolvers = {
  Query: {
    name: () => "hojin",
  },
};

export default resolvers;
```

graphql/resolvers.js 내용

playground는 graphql-yoga에만 있는 것이며, postman과 비슷하다.

```query
query {
  name
}
```

위 쿼리문을 playground로 보내면

```
{
  "data": {
    "name": "hojin"
  }
}
```

위 결과를 얻을 수 있다.

## Extending the Schema

```js
import { GraphQLServer } from "graphql-yoga";
import resolvers from "./graphql/resolvers";

const server = new GraphQLServer({
  typeDefs: "graphql/schema.graphql",
  resolvers,
});

server.start(() => console.log("Graphql Server Running"));
```

resolver.js

```graphql
type HoJin {
  name: String!
  age: Int!
  gender: String!
}

type Query {
  person: HoJin!
}
```

schema.graphql

```
query {
  person {
    gender
    age
    name
  }
}
```

위 Query문을 보내면

```
{
  "data": {
    "person": {
      "gender": "male",
      "age": 24,
      "name": "hojin"
    }
  }
}
```

위와 같은 결과를 얻을 수 있다.

## Two

```js
import { people } from "./db";

const resolvers = {
  Query: {
    people: () => people,
  },
};

export default resolvers;
```

resolver.js

people은 배열로 여러사람의 정보를 객체로 저장 중.

```
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

schema.graphql

```query
query {
  people {
    id
    name
    age
  }
}
```

query문

```
{
  "data": {
    "people": [
      {
        "id": 0,
        "name": "hojin",
        "age": 24
      },
      {
        "id": 1,
        "name": "Daal",
        "age": 18
      },
      {
        "id": 2,
        "name": "JD",
        "age": 20
      },
      {
        "id": 3,
        "name": "flynn",
        "age": 19
      }
    ]
  }
}
```

결과

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
