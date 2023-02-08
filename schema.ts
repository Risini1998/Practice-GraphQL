import { gql } from "apollo-server-express";

export const typeDefs = gql`
  type Query {
    greeting: String
    users: [User]
  }

  type Mutation {
    createUser(firstName: String, lastName: String): User!,
    deleteUser(id: ID!): [User],
    updateUser(id: ID!, firstName: String!, lastName: String!): [User]
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
  }
`;