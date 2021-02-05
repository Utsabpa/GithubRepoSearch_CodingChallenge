import ReactDOM from 'react-dom';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import App from './App';

// Using ApolloClient for connecting it to GraphQL
const client = new ApolloClient({
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer e72033213abf348a25ae71x8271254bbdb5ebbfd`,
  },
  uri: 'https://api.github.com/graphql',
});

// Wrap the App inside ApolloProvider
ReactDOM.render(
  <ApolloProvider client={client}>
    <App />
  </ApolloProvider>,
  document.getElementById('root')
);
