import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import './i18n';
import { ApolloClient, InMemoryCache, gql, ApolloLink, HttpLink } from '@apollo/client';
// eslint-disable-next-line no-undef
const rootElement = document.getElementById('root');

createRoot(rootElement).render(<App />);

export async function getStaticProps() {
  const httpLink = new HttpLink({
    uri: 'https://api.github.com/graphql',
  });

  const authLink = new ApolloLink((operation, forward) => {
    operation.setContext(({ headers = {} }) => ({
      headers: {
        ...headers,
        authorization: `Bearer ${process.env.GITHUB_ACCES_TOKEN}`,
      },
    }));

    return forward(operation);
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

  const { user } = data;
  const pinnedItems = user.pinnedItems.nodes;

  return {
    props: {
      pinnedItems
    }
  };
}

