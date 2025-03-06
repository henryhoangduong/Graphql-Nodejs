import gql from "graphql-tag";
import { createSchema } from "graphql-yoga";
import { typeDef as User } from "./models/user.js";
import _ from "lodash"
import { resolvers as userResolvers } from "./models/user.js";
const queries = gql`
  type Query {
    hello: String
    user: User
  }
`;


const resolvers = {
  Query: {
    hello: () => "Hello from Yoga!", 
  }, User: {
    name: (obj) => {
      return obj.name.toUpperCase();
    }
  }
};

export const schema = createSchema({
  typeDefs: [queries, User],
  resolvers: _.merge(resolvers, userResolvers),
});
