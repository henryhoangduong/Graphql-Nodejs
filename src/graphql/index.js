import gql from "graphql-tag";
import { createSchema } from "graphql-yoga";
import { typeDef as User } from "./models/user";
const queries = gql`
  type Query {
    hello: String
    user: User
  }
`;


export const schema = createSchema({
  typeDefs: [queries, User],
  resolvers: {
    Query: {
      hello: () => "Hello from Yoga!",
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
  },
});
