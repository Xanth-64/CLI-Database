const { Sequelize } = require('sequelize')

// Resolvers
const Op = Sequelize.Op
const resolvers = {
    Query: {
        async getPersonas(root, args, { models }) {
            return await models.persona.findAll()
        },

        async getAreas(root, args, { models }) {
            return await models.areacomun.findAll()
        },

        async getEdificios(root, args, { models }) {
            return await models.edificio.findAll()
        },

        async getPersonaByCedula(root, { extranjeria, numero_ci }, { models }) {
            return await models.persona.findOne({
                where: {
                    extranjeria: extranjeria,
                    numero_ci: numero_ci,
                },
            })
        },

        async getAreaComun(root, { numero, tipo }, { models }) {
            return await models.areacomun.findOne({
                where: {
                    numero: numero,
                    tipo: tipo,
                },
            })
        },

        async getEdificio(root, { numero, nombre_conjunto }, { models }) {
            return await models.edificio.findOne({
                where: {
                    numero: numero,
                    nombre_conjunto: nombre_conjunto,
                },
            })
        },
    },
    Mutation: {
        async createEdificio(root, { nombre_conjunto, numero }, { models }) {
            return await models.edificio.create({ nombre_conjunto, numero })
        },

        async createPersona(
            root,
            { nombre, apellido, extranjeria, numero_ci, edad },
            { models }
        ) {
            return await models.persona.create({
                nombre,
                apellido,
                extranjeria,
                numero_ci,
                edad,
            })
        },

        async createAreaComun(root, { tipo, numero }, { models }) {
            return models.areacomun.create({
                estado: 'Disponible',
                tipo: tipo,
                numero: numero,
            })
        },

        async updatePersonaName(
            root,
            { extranjeria, numero_ci, newNombre },
            { models }
        ) {
            return await models.persona.update(
                { nombre: newNombre },
                {
                    where: {
                        extranjeria: extranjeria,
                        numero_ci: numero_ci,
                    },
                }
            )[1]
        },

        async occupyAreaComun(root, { personaID, momento, tipo, numero }) {
            return await models.areacomun.update(
                { personaID, momento },
                {
                    where: {
                        tipo: tipo,
                        numero: numero,
                    },
                }
            )[1]
        },
    },
}

module.exports = resolvers
