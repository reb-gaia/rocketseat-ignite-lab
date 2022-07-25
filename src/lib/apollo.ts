import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri:'https://api-sa-east-1.hygraph.com/v2/cl612ifnj4h4f01ut9nkc4erj/master',
  cache: new InMemoryCache()
})