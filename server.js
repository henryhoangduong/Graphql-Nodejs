import express from "express";
import { ruruHTML } from "ruru/server";
import { createSchema, createYoga } from "graphql-yoga";

const yoga = createYoga({
  schema: createSchema({
    typeDefs: `
            type Query{
            hello:String
        }
        `,
    resolvers: {
      Query: {
        hello: () => "hello from yoga",
      },
    },
  }),
});

const app = express();

app.get("/",yoga);

app.listen(4000);
console.log("Api running on: http://localhost:4000");
