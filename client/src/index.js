import React from 'react';
import ReactDOM from 'react-dom';
import GlobalStyles from './styles';
import Pages from './pages';
import { ApolloProvider, useApolloClient, InMemoryCache, ApolloClient } from '@apollo/client';
const client = new ApolloClient({
  uri: "http://localhost:4000",
  cache: new InMemoryCache(),

});
ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);
