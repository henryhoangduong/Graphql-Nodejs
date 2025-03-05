import { createSchema } from "graphql-yoga";

export const schema = createSchema({
  typeDefs: `
    type Query:{
    hello: String
    user: User
    }
    type User{
        id: Int
        name : String

    }
    `,
    resolvers: {
        Query: {
            hello: () => "Hello from yoga!",
            user: () => {
                return {
                    id: 1,
                    name: "henry"
                }
            }
        },
        User: {
            name: (obj) => {
                return obj.name.toUpperCase();
            }
        }

    }
});
