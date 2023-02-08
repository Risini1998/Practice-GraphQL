"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.typeDefs = void 0;
const apollo_server_express_1 = require("apollo-server-express");
exports.typeDefs = (0, apollo_server_express_1.gql) `
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
