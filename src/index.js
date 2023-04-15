import React from 'react';
import {createRoot} from 'react-dom/client';
import App from './App';
import './index.css';
import { ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

// eslint-disable-next-line no-undef
const rootElement = document.getElementById('root');

createRoot(rootElement).render(<App />);

export async function getStaticProps() {
  const httpLink = createHttpLink({
    uri: 'https://api.github.com/graphql',
  });

  const authLink = setContext((_, { headers }) => {
    return {
      headers: {
        ...headers,
        // eslint-disable-next-line no-undef
        authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCES_TOKEN}`,
      }
    };
  });

  const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
  });

  const { data } = await client.query({
    query: gql`
        {
            user(login: "jonasaugust1") {
              pinnedItems(first: 6) {
                totalCount
                nodes {
                  ... on Repository {
                    id
                    name
                    url
                    description
                    homepageUrl
                    primaryLanguage {
                      name
                      color
                    }
                  }
                }
              }
            }
          }
        `
  });

  const {user} = data;
  const pinnedItems = user.pinnedItems.nodes;
  
  return {
    props: {
      pinnedItems
    }
  };
} 

