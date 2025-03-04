var { graphql, buildSchema } = require("graphql");
var express = require("express");
var { createHandler } = require("graphql-http/lib/use/express");
var {ruruHTML} = require("ruru/server")
var schema = buildSchema(
  `type Query{
        hello: String,
        age:Int
    }`,
);

var rootValue = {
  hello: () => {
    return "Hello world";
  },
  age: () => {
    return 25;
  },
};

graphql({
  schema,
  source: "{hello}",
  rootValue,
}).then((response) => console.log(response));

const app = express();

app.get("/", (_req, res) => {
    res.type("html");
    res.end(ruruHTML({endpoint:"/graphql"}))
})

app.all("/graphql", createHandler({ schema: schema, rootValue: rootValue }));
app.listen(4000);
console.log("Api running on: http://localhost:4000");
