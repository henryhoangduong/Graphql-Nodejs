import gql from "graphql-tag";
export const typeDef = gql`
  type Query {
    usr: User
  }
  type Mutation {
    createUser(name: String!, age: Int): User
  }
  type User {
    id: Int
    name: String
  }
`;

export const resolvers = {
  Query: {
    user: (_, { name, age }) => {
      return {
        id: 1,
        name: "henry",
      };
    },
  },
  User: {
    name: (obj) => {
      return obj.name.toUpperCase();
    },
  },
};
