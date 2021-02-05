import React, { useContext, useState } from 'react';
import List from '../components/repo-list';
import { useQuery } from '@apollo/client';
import UserSearch from '../components/search';
import Loader from '../components/loader';
import styles from './repository-search.module.scss';
import { toast } from 'react-toastify';
import ThemeContext from '../context/theme';
import { gql } from '@apollo/client';

// GraphQL query for getting the data
const searchQuery = gql`
  query searchRepositories($queryString: String!) {
  search(query: $queryString, type: USER, first: 10) {
    edges {
      node {
        ... on User {
          login
          repositories(first: 100) {
            edges {
            node {
              ... on Repository {
                id
                name
              }
            }
            }
          }
        }
      }
    }
  }
  }
`;

function App() {
  const { theme } = useContext(ThemeContext);
  const [username, setUsername] = useState('');
  const { error, loading, data } = useQuery(searchQuery, {
    variables: { queryString: username },
    skip: !username,
  });

  // Showing error message using toast
  if (error) {
    toast('Error occurred!', {
      type: 'error',
    });
    return null;
  }

  const users = data?.search.edges;
  // Github API returns not just the users but the organizations as well
  const repositories = users ? users.reduce((acc: any, curr: any) => {
    try {
      return [...acc, ...curr.node.repositories?.edges];
    } catch (e) {
      return acc;
    }
  }, []) : null;

  return (
    <div className={`${styles["main-container"]} ${styles[theme]}`}>
      <UserSearch onSubmit={setUsername} />
      {loading ? <Loader className={styles['loader']} /> : <List data={repositories} className={styles['user-list']} />}
    </div>
  );
}

export default App;
