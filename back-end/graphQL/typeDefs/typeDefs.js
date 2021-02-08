const { gql } = require('apollo-server-express')
//Type Definitions
const typeDefs = gql`
    type persona {
        id: Int!
        nombre: String!
        apellido: String!
        extranjeria: String!
        numero_ci: Int!
        edad: Int!
    }

    type areacomun {
        id: Int!
        estado: String!
        tipo: String!
        numero: Int!
        personaID: Int!
        momento: Int!
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
        getPersonaByCedula(extranjeria String!,numero_ci Int!): persona
        getAreaComun(numero Int!, tipo String!): areacomun
        
    }

    type Mutations {

    }

`

module.exports = typeDefs
