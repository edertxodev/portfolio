import { Query } from '@/lib/graphql/generated'
import { getClient } from '@/lib/graphql/client'
import { gql } from 'graphql-request'

export async function getUserData() {
  const query = gql`
    query GetMe {
      user(login: "edertxodev") {
        ... on User {
          name
          bio
          avatarUrl
          location
          company
          pinnedItems(first: 10) {
            nodes {
              ... on Repository {
                id
                url
                name
                description
              }
            }
          }
        }
      }
    }
  `
  const response = await getClient().request<Query>(query)

  return response.user
}
