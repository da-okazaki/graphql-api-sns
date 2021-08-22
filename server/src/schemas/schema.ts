import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Users {
    id: ID
    name: String
    profile: String
  }

  type Query {
    books: [Book!]!
    users: [Users!]!
  }

  type Mutation {
    createUser(name: String, profile: String): Users
  }
`;
/**
type Mutation {
  createUser(name: String): User!
}
 */
