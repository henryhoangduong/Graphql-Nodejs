import gql from "graphql-tag";
export const typeDef = gql`
  type Query {
    user:User 
    users: [User!]! 
  }
  type Mutation {
    createUser(name: String!, age: Int): User
  }
  type User {
    id: I D!
    name: String
    age: Int
  }
`;

export const resolvers = {
  Query: {
    user: async (_, { name }, context) => {
      console.log(context.client);
      const movies = await context.mongo.movies.find().toArray();
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
