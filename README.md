## 🏗 GraphQL로 영화 API 만들기
[GraphQL로 영화 API 만들기🚀](https://nomadcoders.co/graphql-for-beginners)


## 📝 Table of Contents
- [Why GraphQL?](#1)
- [2](#2)
  

## <a name="1"></a>Why GraphQL?
Facebook의 모바일 앱은 2012년부터 GraphQL로 구동되었습니다.
GraphQL의 spec은 2015년 오픈소스로 공개되었으며, 현재 페이스북, 깃허브, 핀터레스트, Shopify 등에서 사용하고 있습니다.


### over-fetching
```json
movie {
    id: 11,
    title: "SpiderMan",
    summary: "SpiderMan is back"
    ...
}
```

영화에 대한 정보의 title만 보여주는 앱을 제작한다고 가정한다. REST API를 fetching하면 id, title, summary... 등 모든 정보를 받게 됩니다.

내가 필요한 정보는 title인데 다른 모든 정보를 불러오게되는 것을 over-fetching 이라고 합니다.
GraphQL을 사용하면 API에 GraphQL 쿼리를 보내고 필요한 것만 정확히 얻을 수 있습니다.

> Ask for what you need, get exactly that<br/>
> Send a GraphQL query to your API and get exactly what you need, nothing more and nothing less. GraphQL queries always return predictable results. Apps using GraphQL are fast and stable because they control the data they get, not the server.


### under-fetching

필요한 데이터보다 적은 데이터를 fetch하는 것을 말합니다.

일반적인 REST API는 여러 URL에서 로딩해야 하지만 GraphQL API는 앱에 필요한 모든 데이터를 단일 request로 가져옵니다. GraphQL을 사용하는 앱은 느린 모바일 네트워크 연결에서도 빠를 수 있습니다.

> Get many resources in a single request<br/>
> GraphQL queries access not just the properties of one resource but also smoothly follow references between them. While typical REST APIs require loading from multiple URLs, GraphQL APIs get all the data your app needs in a single request. Apps using GraphQL can be quick even on slow mobile network connections.


## <a name="reference"></a>Reference

https://nomadcoders.co/graphql-for-beginners

https://graphql.org/

https://graphql.org/users

https://www.apollographql.com/docs/apollo-server/

