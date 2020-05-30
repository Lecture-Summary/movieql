# movieql

Movie API with Graphql

##

```ssh
yarn add graphql-yoga
```

GraphQL로 해결할 수 있는 두가지 문제

Over-fetching : 요청한 영역의 정보보다, 많은 정보를 서버에서 받는 것

Under-fetching : SNS 앱을 예로 들면 notification, users, feed 등을 불러오는 요청을 여러번 보내지만, GraphQL을 이용하면 이러한 정보를 한번의 요청으로 해결할 수 있다.
