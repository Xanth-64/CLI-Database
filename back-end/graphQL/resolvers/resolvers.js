const { Sequelize } = require('sequelize')
import { resolvers as CoolScalars } from 'graphql-scalars'
//Scalar types

// Resolvers
const Op = Sequelize.Op
const resolvers = {
    ...CoolScalars,
    Query: {
        //READ
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

        async getTelefonosByPersonaID(root, { personaID }, { models }) {
            return await models.telefono.findAll({
                where: {
                    personaID: personaID,
                },
            })
        },

        async getTelefonosByCedula(
            root,
            { extranjeria, numero_ci },
            { models }
        ) {
            models.persona.hasMany(models.telefono)
            models.telefono.belongsTo(models.persona)
            return await models.telefono.findAll({
                include: {
                    model: models.persona,
                    where: {
                        numero_ci: numero_ci,
                        extranjeria: extranjeria,
                    },
                },
            })
        },

        async getApartamentosByPersonaID(root, { personaID }, { models }) {
            return await models.apartamento.findAll({
                where: {
                    personaID: personaID,
                },
            })
        },

        async getApartamentosByCedula(
            root,
            { extranjeria, numero_ci },
            { models }
        ) {
            models.persona.hasMany(models.apartamento)
            models.apartamento.belongsTo(models.persona)
            return await models.apartamento.findAll({
                include: {
                    model: models.persona,
                    where: {
                        numero_ci: numero_ci,
                        extranjeria: extranjeria,
                    },
                },
            })
        },

        async getServiciosByEdificio(root, { edificioID }, { models }) {
            return await models.servicio.findAll({
                where: {
                    edificioID: edificioID,
                },
            })
        },

        async getServiciosByEdificioIdentifier(
            root,
            { nombre_conjunto, numero },
            { models }
        ) {
            models.edificio.hasMany(models.servicio)
            models.servicio.belongsTo(models.edificio)
            return await models.servicio.findAll({
                include: {
                    model: models.edificio,
                    where: {
                        nombre_conjunto: nombre_conjunto,
                        numero: numero,
                    },
                },
            })
        },

        async getSucesoByEdificio(root, { edificioID }, { models }) {
            return models.suceso.findAll({
                where: {
                    edificioID: edificioID,
                },
            })
        },

        async getSucesoByEdificioIdentifier(
            root,
            { nombre_conjunto, numero },
            { models }
        ) {
            models.edificio.hasMany(models.suceso)
            models.suceso.belongsTo(models.edificio)
            return await models.suceso.findAll({
                include: {
                    model: models.edificio,
                    where: {
                        nombre_conjunto: nombre_conjunto,
                        numero: numero,
                    },
                },
            })
        },

        async getSucesoByDate(root, { sucesoDate }, { models }) {
            return await models.suceso.findAll({
                where: {
                    fecha: sucesoDate,
                },
            })
        },

        async getAparcamientoByEdificio(root, { edificioID }, { models }) {
            return await models.aparcamiento.findAll({
                where: {
                    edificioID: edificioID,
                },
            })
        },

        async getAparcamientoByEdificioIdentifier(
            root,
            { nombre_conjunto, numero },
            { models }
        ) {
            models.edificio.hasMany(models.aparcamiento)
            models.aparcamiento.belongsTo(models.edificio)

            return await models.aparcamiento.findAll({
                includes: {
                    model: models.edificio,
                    where: {
                        nombre_conjunto: nombre_conjunto,
                        numero: numero,
                    },
                },
            })
        },

        async getApartamentosByEdificio(root, { edificioID }, { models }) {
            return await models.apartamento.findAll({
                where: {
                    edificioID: edificioID,
                },
            })
        },

        async getMaterialsByEdificio(root, { edificioID }, { models }) {
            return await models.material.findAll({
                where: {
                    edificioID: edificioID,
                },
            })
        },
    },

    Mutation: {
        //CREATE
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
        //UPDATE
        async updatePersonaName(
            root,
            { extranjeria, numero_ci, newNombre },
            { models }
        ) {
            const currentModel = await models.persona.findOne({
                where: {
                    extranjeria: extranjeria,
                    numero_ci: numero_ci,
                },
            })
            if (currentModel) {
                currentModel.nombre = newNombre
                return await currentModel.save()
            } else {
                return null
            }
        },

        async occupyAreaComun(
            root,
            { personaID, momento, tipo, numero },
            { models }
        ) {
            const currentModel = await models.areacomun.findOne({
                where: {
                    numero: numero,
                    tipo: tipo,
                },
            })
            if (currentModel) {
                if (!currentModel.personaID) {
                    currentModel.personaID = personaID
                    currentModel.momento = momento
                    currentModel.estado = 'Ocupado'
                    return await currentModel.save()
                }
            } else {
                return null
            }
        },

        async deOccupyAreaComun(root, { tipo, numero }, { models }) {
            const currentModel = await models.areacomun.findOne({
                where: {
                    numero: numero,
                    tipo: tipo,
                },
            })
            if (currentModel) {
                currentModel.personaID = null
                currentModel.momento = null
                currentModel.estado = 'Disponible'
                return currentModel.save()
            } else {
                return null
            }
        },

        //DELETE
        //TODO: Hacer los Deletes "Paranoid-Friendly"

        async deleteAreaComun(root, { tipo, numero }, { models }) {
            models.areacomun.destroy({
                where: {
                    numero: numero,
                    tipo: tipo,
                },
            })
        },
        async deletePersona(root, { extranjeria, numero_ci }, { models }) {
            models.persona.destroy({
                where: {
                    extranjeria: extranjeria,
                    numero_ci: numero_ci,
                },
            })
        },
    },
}

module.exports = resolvers
