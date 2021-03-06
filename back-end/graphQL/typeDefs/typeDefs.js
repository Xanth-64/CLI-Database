const { gql } = require('apollo-server-express')
//Type Definitions
const typeDefs = gql`
    scalar Date

    type persona {
        id: Int!
        nombre: String!
        apellido: String!
        extranjeria: String!
        numero_ci: Int!
        fecha_nac: Date!
    }

    type areacomun {
        id: Int!
        estado: String!
        tipo: String!
        numero: Int!
        personaID: Int
        momento: Date
    }

    type edificio {
        id: Int!
        nombre_conjunto: String!
        numero: Int!
    }

    type Query {
        getPersonas: [persona]
        getAreas: [areacomun]
        getEdificios: [edificio]
        getPersonaByCedula(extranjeria: String!, numero_ci: Int!): persona!
        getAreaComun(numero: Int!, tipo: String!): areacomun!
        getEdificio(numero: Int!, nombre_conjunto: String!): edificio!
    }

    type Mutation {
        createEdificio(nombre_conjunto: String!, numero: Int!): edificio!
        createPersona(
            nombre: String!
            apellido: String!
            extranjeria: String!
            numero_ci: Int!
            edad: Int!
        ): persona!
        createAreaComun(tipo: String!, numero: Int!): areacomun!

        updatePersonaName(
            extranjeria: String!
            numero_ci: Int!
            newNombre: String!
        ): persona!

        occupyAreaComun(
            personaID: Int!
            momento: Date!
            tipo: String!
            numero: Int!
        ): areacomun!

        deOccupyAreaComun(tipo: String!, numero: Int!): areacomun!

        deleteAreaComun(numero: Int!, tipo: String!): areacomun

        deletePersona(extranjeria: String!, numero_ci: Int!): persona
    }
`

module.exports = typeDefs
