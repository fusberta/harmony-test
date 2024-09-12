import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { getAccessToken } from './auth/auth.helper';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.escuelajs.co/graphql',
  }),
  cache: new InMemoryCache(),
});

export const authorizedClient = new ApolloClient({
  link: new HttpLink({
    uri: 'https://api.escuelajs.co/graphql',
    headers: {
      'Authorization': `Bearer ${getAccessToken()}`,
    },
  }),
  cache: new InMemoryCache(),
});
