import {graphql, buildSchema} from "graphql"

var schema = buildSchema(
    `type Query{
        hello: String
    }`
)

var rootValue = {
    hello: () => {
        return "Hello world";
    }
}

graphql({
    schema,
    source: "{hello}",
    rootValue,
}).then(response => console.log(response))