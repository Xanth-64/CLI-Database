// Node Server
import express from 'express'
import { ApolloServer, gql } from 'apollo-server-express'

const models = require('./sequelize/index')

models.sequelize.authenticate().then(
    (msj) => {
        console.log(`Se ha conectado a la BD ${msj}`)
    },
    (err) => {
        console.error(err)
    }
)
models.sequelize.sync()
import typeDefs from './graphQL/typeDefs/typeDefs'

import resolvers from './graphQL/resolvers/resolvers'

const server = new ApolloServer({ typeDefs, resolvers, context: { models } })
const app = express()

server.applyMiddleware({ app })

const PORT = 4000
app.listen(PORT, () => {
    console.log(
        `Node Application Running on http://localhost:${PORT}${server.graphqlPath} `
    )
})
