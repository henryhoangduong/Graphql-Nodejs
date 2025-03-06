import gql from "graphql-tag";
export const typeDef = gql`
  type Query {
    usr: User
  }
  type User {
    id: Int
    name: String
  }
`;
export const resolvers = {
  Query: {
    user: () => {
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