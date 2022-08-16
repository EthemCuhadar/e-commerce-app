import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ApolloProvider, ApolloClient, InMemoryCache, createHttpLink } from "@apollo/client";

const createApolloClient = (token) => {
  return new ApolloClient({
    link: createHttpLink({
      uri: 'https://simplisaleshw.cotunnel.com/graphql',
      headers: {
        authorization: `Bearer ${token}`
      }
    }),
    cache: new InMemoryCache()
  });
}

const client = createApolloClient(localStorage.getItem('token'));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>
);