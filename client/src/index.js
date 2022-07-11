import React from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';
import GlobalStyles from './styles';
import Pages from './pages';

const client = new ApolloClient({
  // uri: 'http://localhost:4000',
  uri: "https://catstronaut-server-rirmi.herokuapp.com/", // change to YOUR own production server
  cache: new InMemoryCache(),
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <GlobalStyles />
    <Pages />
  </ApolloProvider>,
  document.getElementById('root')
);
