import React from 'react'
import ReactDOM from "react-dom";
import App from './App';
import './index.css'
import { ApolloClient, createHttpLink, InMemoryCache, gql } from '@apollo/client';
import { setContext } from '@apollo/client/link/context'

console.log(process.env.REACT_APP_GITHUB_ACCES_TOKEN)
ReactDOM.render(<App />, document.getElementById("root"))

export async function getStaticProps() {
    const httpLink = createHttpLink({
        uri: 'https://api.github.com/graphql',
    });

    const authLink = setContext((_, { headers }) => {
        return {
            headers: {
                ...headers,
                authorization: `Bearer ${process.env.REACT_APP_GITHUB_ACCES_TOKEN}`,
            }
        }
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
                  }
                }
              }
            }
          }
        `
    })

    const {user} = data
    const pinnedItems = user.pinnedItems.nodes

    console.log(pinnedItems)

    return {
        props: {
            pinnedItems
        }
    }
} 

