import { ApolloClient, InMemoryCache } from "@apollo/client";

export let client = new ApolloClient({ uri: 'http://localhost:3000/api/graphql', cache: new InMemoryCache() });

