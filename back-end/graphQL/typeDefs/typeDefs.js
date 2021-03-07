const { gql } = require('apollo-server-express')

//Type Definitions
const typeDefs = gql`
    scalar Date

    scalar Time

    scalar DateTime

    scalar ISO8601Duration

    scalar Timestamp

    scalar Duration

    scalar UtcOffset

    scalar LocalDate

    scalar IBAN

    scalar Hexadecimal

    scalar LocalTime

    scalar LocalEndTime

    scalar EmailAddress

    scalar NegativeFloat

    scalar NegativeInt

    scalar NonEmptyString

    scalar NonNegativeFloat

    scalar NonNegativeInt

    scalar NonPositiveFloat

    scalar NonPositiveInt

    scalar PhoneNumber

    scalar PositiveFloat

    scalar PositiveInt

    scalar PostalCode

    scalar UnsignedFloat

    scalar UnsignedInt

    scalar URL

    scalar ObjectID

    scalar BigInt

    scalar Long

    scalar SafeInt

    scalar UUID

    scalar GUID

    scalar HexColorCode

    scalar HSL

    scalar HSLA

    scalar IPv4

    scalar IPv6

    scalar ISBN

    scalar JWT

    scalar MAC

    scalar Port

    scalar RGB

    scalar RGBA

    scalar USCurrency

    scalar Currency

    scalar JSON

    scalar JSONObject

    scalar Byte

    scalar Void
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

    type aparcamiento {
        id: Int!
        edificioId: Int!
        letra: String!
        numero: Int!
        personaID: Int
        pisosub: Int!
    }

    type apartamento {
        id: Int!
        alicuota: Int!
        edificioID: Int!
        letra_apt: String!
        n_piso: Int!
        personaID: Int!
        registro_inmobiliario: String!
        superficie: Int!
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
        total_apartamento_pagado: Int
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
        telefono: Long!
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
        getServiciosbyFacturaID(facturaID: Int!): [servicio]
        getPersonasInEdificio(numero: Int!, nombre_conjunto: String!): [persona]
        getEmailsbyPersonaID(personaID: Int!): [email]
        getEmailsbyPersona(extranjeria: String!, numero_ci: Int!): [email]
        getReservacionesByPersonaID(personaID: Int!): [areacomun]
        getReservacionesByPersona(
            extranjeria: String!
            numero_ci: Int!
        ): [areacomun]
        getGastosExtraInFacturaID(facturaID: Int!): [gastosExtras]
        getRegistrosByCedula(extranjeria: String!, numero_ci: Int!): [registro]
        getRegistroByEdificio(edificioID: Int!): [registro]
        getAreasbyEstado(estado: String!): [areacomun]
        getAparcamientoByPersonaID(personaID: Int!): [aparcamiento]
        getAparcamientoByCedula(
            extranjeria: String!
            numero_ci: Int!
        ): [aparcamiento]
        getApartamentosByPersonaID(personaID: Int!): [apartamento]
        getApartamentosByCedula(
            extranjeria: String!
            numero_ci: Int!
        ): [apartamento]
        getServiciosByEdificio(edificioID: Int!): [servicio]
        getServiciosByEdificioIdentifier(
            nombre_conjunto: String!
            numero: Int!
        ): [servicio]
        getSucesoByEdificio(edificioID: Int!): [suceso]
        getSucesoByEdificioIdentifier(
            nombre_conjunto: String!
            numero: Int!
        ): [suceso]
        getSucesoByDate(sucesoDate: LocalDate!): [suceso]
        getAparcamientoByEdificio(edificioID: Int!): [aparcamiento]
        getAparcamientoByEdificioIdentifier(
            nombre_conjunto: String!
            numero: Int!
        ): [aparcamiento]
        getApartamentosByEdificio(edificioID: Int!): [apartamento]
        getMaterialsByEdificio(edificioID: Int!): [material]
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
