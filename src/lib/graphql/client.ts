import { GraphQLClient } from 'graphql-request'

const client = new GraphQLClient(process.env.GITHUB_GQL_ENDPOINT ?? '')

export function getClient() {
  const token = process.env.GITHUB_ACCESS_TOKEN
  if (token) {
    client.setHeader('Authorization', `Bearer ${token}`)
  }

  return client
}
