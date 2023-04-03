import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
import { useLogin } from './auth';
export const client = new ApolloClient({
    uri: 'http://localhost:3000/api/graphql',
    cache: new InMemoryCache(),

});

export let api = {
    auth: {
        useLogin
    }
}