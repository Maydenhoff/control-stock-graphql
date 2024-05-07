const { ApolloServerPluginLandingPageGraphQLPlayground } = require("apollo-server-core")
const { ApolloServer } = require("apollo-server-express")
const  resolvers  = require("./resolvers")
const {resolvers: scalarResolvers, typeDefs: scalarsTypeDefs } = require("graphql-scalars")
const {loadFiles} = require("@graphql-tools/load-files")
const {buildContext } = require("graphql-passport")

const useGraphql = async(app) => {
    const typeDefs = [
        ...await loadFiles("./src/*.graphql"),
        scalarsTypeDefs

    ]
    const allResolvers = [
        resolvers,
        scalarResolvers
    ]
    const server = new ApolloServer({
        typeDefs,
        resolvers: allResolvers,
        playground: true,
        context: ({req, res}) => buildContext({req, res}),
        plugins : [
            ApolloServerPluginLandingPageGraphQLPlayground
        ]
    })
    await server.start()
    server.applyMiddleware({app})
}

module.exports = useGraphql