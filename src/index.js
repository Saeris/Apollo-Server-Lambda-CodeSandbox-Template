const { ApolloServer, gql } = require("apollo-server-lambda")

// Construct a schema, using GraphQL schema language
const typeDefs = gql`
  type Query {
    hello: String
  }
`

// Provide resolver functions for your schema fields
const resolvers = {
  Query: {
    hello: (root, args, context) => "Hello world!"
  }
}

const server = new ApolloServer({ typeDefs, resolvers })

exports.graphqlHandler = server.createHandler()
