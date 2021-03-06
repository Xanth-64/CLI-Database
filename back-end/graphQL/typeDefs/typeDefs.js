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
        edad: Int!
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
    type email {
        id: Int!
        personaID: Int!
        email: String!
    }
    type factura {
        id: Int!
        estado: String!
        fecha_emitida: Date!
        total_apartamento_pagado: Int!
        apartamentoID: Int!
    }
    type gastosExtras {
        id: Int!
        monto: Int!
        nombre: String!
        anio_mes: Date!
        apartamentoID: Int!
        facturaID: Int!
    }
    type incluyen {
        id: Int!
        servicioID: Int!
        facturaID: Int!
    }
    type material {
        id: Int!
        cantidad: Int!
        tipo: String!
        nombre: String!
        edificioID: Int!
    }
    type persona {
        id: Int!
        nombre: String!
        apellido: String!
        extranjeria: String!
        numero_ci: Int!
        fecha_nac: Date!
    }
    type registro {
        id: Int!
        nombre_visitante: Int!
        fecha_hora: Date!
        ci_visitante: Int!
        edificioID: Int!
    }
    type reservan {
        id: Int!
        areaID: Int!
        personaID: Int!
        momento: Date!
    }
    type servicio {
        id: Int!
        edificioID: Int!
        nombre: String!
        anio_mes: Date!
        costo: Int!
    }
    type suceso {
        id: Int!
        descripcion: String!
        titulo: String!
        fecha: Date!
        edificioID: Int!
    }
    type telefono {
        id: Int!
        personaID: Int!
        telefono: Int!
    }
    type Query {
        getPersonas: [persona]
        getAreas: [areacomun]
        getEdificios: [edificio]
        getPersonaByCedula(extranjeria: String!, numero_ci: Int!): persona!
        getAreaComun(numero: Int!, tipo: String!): areacomun!
        getEdificio(numero: Int!, nombre_conjunto: String!): edificio!
        getTelefonosByPersonaID(personaID: Int!): [telefono]
        getTelefonosByCedula(extranjeria: String!, numero_ci: Int!): [telefono]
        getServiciosbyFacturaID(facturaID: int!): [servicio]
        getPersonasInEdificio(numero: Int!, nombre_conjunto: String!): [persona]
        getEmailsbyPersonaID(personaID: Int!): [email]
        getEmailsbyPersona(extranjeria: String!, numero_ci: Int!): [email]
        getReservacionesByPersonaID(personaID: Int!): [areacomun]
        getReservacionesByPersona(
            extranjeria: String!
            numero_ci: Int!
        ): [areacomun]
        getGastosExtraInFacturaID(facturaID: int!): [gastosExtras]
        getRegistrosByCedula(extranjeria:String! numero_ci:Int1)[registro]
        getRegistroByEdificio(edificioID:Int!):[registro]
        getAreasbyEstado(estado:String!): [areacomun]
        getAparcamientosByPersonaID(personaID: Int!): [aparcamientos]
        getAparcamientosByCedula(extranjeria: String! numero_ci: Int!)[aparcamientos]
        getApartamentosByPersonaID(personaID:Int!):[apartamento]
        getApartamentosByCedula(extranjeria: String!, numero_ci:Int!): [apartamento]
        getServiciosByEdificio(edificioID:Int!):[servicio]
        getSucesoByEdificio(edificioID:Int!):[suceso]
        getAparcamientosByEdificio(edificioID: Int!): [aparcamientos]
        getApartamentosByEdificio(edificioID: Int!): [apartamentos]
        getMaterialsByEdificio(edificioID:Int!):[material]        
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
        createFactura(
            estado: String!
            fecha_emitida: Date!
            total_apartamento_pagado: Int!
            apartamentoID: Int!
        ): factura!
        addTelefono(personaID: Int!, telefono: Int!): [telefono]!
        addTelefonoWithCedula(
            extranjeria: String!
            numero_ci: Int!
            telefono: Int!
        ): [telefono]!
        addEmailwithPersonaID(personaID: Int!, email: String!): [email]!
        createRegistro(
            edificioID: Int!
            nombre_visitante: String!
            fecha_hora: Date!
            numero_ci: Int!
        ): [registro]!
        createSuceso(
            edificioID: Int!
            titulo: String!
            descripcion: String!
            fecha: Date!
        ): suceso!
        createServicio(
            edificioID: Int!
            nombre: String!
            anio_mes: Date!
            costo: Int!
        ): servicio!
        createMaterial(
            edificioID: Int!
            nombre: String!
            tipo: String!
            cantidad: Int!
        ): material!
        updatePersonaName(
            extranjeria: String!
            numero_ci: Int!
            newNombre: String!
        ): persona!
        updateEmailList(
            personaID: Int!
            oldemail: String!
            newEmail: String!
        ): [email]
        updateTelehoneList(
            personaID: Int!
            oldTelefono: Int!
            newTelefono: Int!
        ): [telefono]
        occupyAreaComun(
            personaID: Int!
            momento: Date!
            tipo: String!
            numero: Int!
        ): areacomun!

        deOccupyAreaComun(tipo: String!, numero: Int!): areacomun!
        deleteAreaComun(numero: Int!, tipo: String!): areacomun
        deletePersonawithPersonaID(personaID: Int!): persona
        deletePersona(extranjeria: String!, numero_ci: Int!): persona
    }
`

module.exports = typeDefs
