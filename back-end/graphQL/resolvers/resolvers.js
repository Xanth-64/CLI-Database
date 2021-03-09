const { Sequelize, QueryTypes } = require('sequelize')

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

        async getSucesoByDateRange(
            root,
            { LowerBound, UpperBound },
            { models }
        ) {
            return await models.suceso.findAll({
                where: {
                    fecha: {
                        [Op.gte]: LowerBound,
                        [Op.lte]: UpperBound,
                    },
                },
            })
        },

        async getSucesoByDateRangeAndEdificioIdentifier(
            root,
            { LowerBound, UpperBound, nombre_conjunto, numero },
            { models }
        ) {
            models.edificio.hasMany(models.suceso)
            models.suceso.belongsTo(models.edificio)
            return await models.suceso.findAll({
                where: {
                    fecha: {
                        [Op.gte]: LowerBound,
                        [Op.lte]: UpperBound,
                    },
                },
                include: {
                    model: models.edificio,
                    where: {
                        nombre_conjunto: nombre_conjunto,
                        numero: numero,
                    },
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

        async getApartamentosByEdificioIdentifier(
            root,
            { nombre_conjunto, numero },
            models
        ) {
            models.edificio.hasMany(models.apartamento)
            models.apartamento.belongsTo(models.edificio)
            return await models.apartamento.findAll({
                include: {
                    model: models.edificio,
                    where: {
                        nombre_conjunto: nombre_conjunto,
                        numero: numero,
                    },
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

        async getMaterialsByEdificioIdentifier(
            root,
            { nombre_conjunto, numero },
            { models }
        ) {
            models.edificio.hasMany(models.material)
            models.material.belongsTo(models.edificio)

            return await models.material.findAll({
                include: {
                    model: models.edificio,
                    where: {
                        nombre_conjunto: nombre_conjunto,
                        numero: numero,
                    },
                },
            })
        },

        async getGastosExtrasDetail(
            root,
            { nombre_conjunto, numero, n_piso, letra_apt, fecha },
            { models }
        ) {
            models.apartamento.hasMany(models.gastos_extras)
            models.gastos_extras.belongsTo(models.apartamento)
            models.edificio.hasMany(models.apartamento)
            models.apartamento.belongsTo(models.edificio)
            const actualFecha = `${fecha.split('-')[0]}-${
                fecha.split('-')[1]
            }-01`
            return await models.gastos_extras.findAll({
                where: {
                    anio_mes: actualFecha,
                },
                include: {
                    model: models.apartamento,
                    where: {
                        n_piso: n_piso,
                        letra_apt: letra_apt,
                    },
                    include: {
                        model: models.edificio,
                        where: {
                            nombre_conjunto: nombre_conjunto,
                            numero: numero,
                        },
                    },
                },
            })
        },
        async getGastosExtrasResult(
            root,
            { nombre_conjunto, numero, n_piso, letra_apt, fecha },
            { models }
        ) {
            models.apartamento.hasMany(models.gastos_extras)
            models.gastos_extras.belongsTo(models.apartamento)
            models.edificio.hasMany(models.apartamento)
            models.apartamento.belongsTo(models.edificio)
            const actualFecha = `${fecha.split('-')[0]}-${
                fecha.split('-')[1]
            }-01`
            return await models.gastos_extras
                .aggregate('monto', 'sum', {
                    where: {
                        anio_mes: actualFecha,
                    },
                    include: {
                        model: models.apartamento,
                        where: {
                            n_piso: n_piso,
                            letra_apt: letra_apt,
                        },
                        include: {
                            model: models.edificio,
                            where: {
                                nombre_conjunto: nombre_conjunto,
                                numero: numero,
                            },
                        },
                    },
                })
                .then((res) => {
                    return { sum: res }
                })
        },
        async getFacturaDetail(
            root,
            { nombre_conjunto, numero, n_piso, letra_apt, fecha },
            { models }
        ) {
            const actualFecha = `${fecha.split('-')[0]}-${
                fecha.split('-')[1]
            }-01`
            return await models.sequelize.query(
                'SELECT servicio.nombre, servicio.anio_mes, servicio.costo, servicio.costo * apartamento.alicuota/100 as "Monto_A_Pagar" FROM edificio INNER JOIN apartamento ON apartamento.edificioID = edificio.id INNER JOIN factura ON factura.apartamentoID = apartamento.id INNER JOIN incluyen ON factura.id = incluyen.facturaID INNER JOIN servicio ON incluyen.servicioID = servicio.id WHERE edificio.nombre_conjunto = ? AND edificio.numero = ? AND apartamento.n_piso = ? AND apartamento.letra_apt = ? AND  factura.fecha_emitida = ?',
                {
                    replacements: [
                        nombre_conjunto,
                        numero,
                        n_piso,
                        letra_apt,
                        actualFecha,
                    ],
                    type: QueryTypes.SELECT,
                }
            )
        },

        async getFacturaResults(
            root,
            { nombre_conjunto, numero, n_piso, letra_apt, fecha },
            { models }
        ) {
            const actualFecha = `${fecha.split('-')[0]}-${
                fecha.split('-')[1]
            }-01`
            return await models.sequelize.query(
                'SELECT SUM(servicio.costo) As "total_edificio", SUM(servicio.costo * apartamento.alicuota/100) as "total_apartamento",SUM(servicio.costo * apartamento.alicuota/100) - total_apartamento_pagado AS "total_faltante", total_apartamento_pagado FROM edificio INNER JOIN apartamento ON apartamento.edificioID = edificio.id INNER JOIN factura ON factura.apartamentoID = apartamento.id INNER JOIN incluyen ON factura.id = incluyen.facturaID INNER JOIN servicio ON incluyen.servicioID = servicio.id WHERE edificio.nombre_conjunto = ? AND edificio.numero = ? AND apartamento.n_piso = ? AND apartamento.letra_apt = ? AND  factura.fecha_emitida = ? GROUP BY total_apartamento_pagado ',
                {
                    replacements: [
                        nombre_conjunto,
                        numero,
                        n_piso,
                        letra_apt,
                        actualFecha,
                    ],
                    type: QueryTypes.SELECT,
                }
            )
        },

        async getServiciosByFacturaID(root, { facturaID }, { models }) {
            return await models.servicio.findAll({
                where: {
                    facturaID: facturaID,
                },
            })
        },
        async getPersonasInEdificio(root, { edificioID }, { models }) {
            models.edificio.hasMany(models.apartamento)
            modles.apartamento.belongsTo(models.edificio)
            models.persona.hasMany(models.apartamento)
            models.apartamento.belongsTo(models.persona)
            return await models.persona.findAll({
                where: {
                    includes: {
                        model: models.apartamento,
                        where: {
                            edificioID: edificioID,
                        },
                    },
                },
            })
        },

        async getEmailsbyPersonaID(root, { personaID }, { models }) {
            models.persona.hasMany(models.emails)
            models.email.belongsTo(models.persona)
            return await models.email.findAll({
                where: {
                    personaID: personaID,
                },
            })
        },
        async getEmailsbyPersona(root, { extranjeria, numero_ci }, { models }) {
            models.email.belongsTo(models.persona)
            models.persona.hasMany(model.email)
            return await models.email.findAll({
                where: {
                    includes: {
                        model: models.persona,
                        where: {
                            extranjeria: extranjeria,
                            numero_ci: numero_ci,
                        },
                    },
                },
            })
        },
        async getReservacionesByPersonaID(root, { personaID }, { models }) {
            models.areacomun.belongsTo(models.persona)
            models.persona.hasMany(models.areacomun)
            return await models.findAll({
                where: {
                    personaID: personaID,
                },
            })
        },
        async getReservacionesByPersona(
            root,
            { extranjeria, numero_ci },
            { models }
        ) {
            models.areacomun.belongsTo(models.persona)
            models.persona.hasMany(models.areacomun)
            return await models.areacomun.findAll({
                where: {
                    includes: {
                        model: models.persona,
                        where: {
                            extranjeria: extranjeria,
                            numero_ci: numero_ci,
                        },
                    },
                },
            })
        },
        async getGastosExtraInFacturaID(root, { facturaID }, { models }) {},
        async getRegistrosByCedula(root, { numero_ci }, { models }) {
            return await models.registro.findAll({
                where: {
                    ci_visitante: numero_ci,
                },
            })
        },
        async getRegistroByEdificio(root, { edificioID }, { models }) {
            models.edificio.hasMany(models.registro)
            models.registro.belongsTo(models.edificio)
            return await models.registro.findAll({
                where: {
                    edificioID: edificioID,
                },
            })
        },
        async getAreasbyEstado(root, { estado }, { models }) {
            return await models.areacomun.findAll({
                estado: estado,
            })
        },
        async getAparcamientoByPersonaID(root, { personaID }, { models }) {
            models.persona.hasMany(models.aparcamiento)
            models.aparcamiento.belongsTo(models.persona)
            return await models.aparcamiento.findAll({
                where: {
                    personaID: personaID,
                },
            })
        },
        async getAparcamientoByCedula(
            root,
            { extranjeria, numero_ci },
            { models }
        ) {
            models.persona.hasMany(models.aparcamiento)
            models.aparcamiento.belongsTo(models.persona)
            return await models.aparcamiento.findAll({
                where: {
                    includes: {
                        model: models.persona,
                        where: {
                            extranjeria: extranjeria,
                            numero_ci: numero_ci,
                        },
                    },
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
            { nombre, apellido, extranjeria, numero_ci, fecha_nac },
            { models }
        ) {
            return await models.persona.create({
                nombre,
                apellido,
                extranjeria,
                numero_ci,
                fecha_nac,
            })
        },

        async createApartamento(
            root,
            {
                nombre_conjunto,
                numero,
                extranjeria,
                numero_ci,
                alicuota,
                letra_apt,
                n_piso,
                registro_inmobiliario,
                superficie,
            },
            { models }
        ) {
            const edificio = await models.edificio.findOne({
                where: {
                    nombre_conjunto: nombre_conjunto,
                    numero: numero,
                },
            })
            const propietario = await models.persona.findOne({
                where: {
                    extranjeria: extranjeria,
                    numero_ci: numero_ci,
                },
            })
            console.log(edificio)
            console.log(propietario)
            if (edificio && propietario) {
                const edificioID = edificio.dataValues.id
                const personaID = propietario.dataValues.id
                const dataToInsert = {
                    alicuota,
                    letra_apt,
                    n_piso,
                    registro_inmobiliario,
                    superficie,
                    edificioID,
                    personaID,
                }
                return await models.apartamento
                    .create(dataToInsert)
                    .then(() => {
                        return {
                            payload:
                                'Apartamento Creado Exitosamente. Información del Mismo:' +
                                JSON.stringify(dataToInsert),
                        }
                    })
                    .catch(() => {
                        return {
                            payload:
                                'Error al insertar el apartamento. Informacion no Valida',
                        }
                    })
            } else {
                return {
                    payload:
                        'Edificio o Propietario No Encontrado. Intente nuevamente',
                }
            }
        },

        async createServicio(
            root,
            { nombre_conjunto, numero, anio_mes, costo, nombre },
            { models }
        ) {
            models.edificio.hasMany(models.apartamento)
            models.apartamento.belongsTo(models.edificio)
            models.apartamento.hasMany(models.factura)
            models.factura.belongsTo(models.apartamento)
            //Estandarizamos la fecha
            const actualFecha = `${anio_mes.split('-')[0]}-${
                anio_mes.split('-')[1]
            }-01`
            //Verificamos que no hayan facturas para ese edificio emitidas para la misma fecha
            const factura = await models.edificio.findOne({
                where: {
                    nombre_conjunto: nombre_conjunto,
                    numero: numero,
                },
                include: {
                    model: models.apartamento,
                    include: {
                        model: models.factura,
                        where: {
                            fecha_emitida: actualFecha,
                        },
                    },
                },
            })
            if (factura) {
                return {
                    payload:
                        'Ya Hay una Factura creada para el edificio para la fecha seleccionada',
                }
            } else {
                const edificio = await models.edificio.findOne({
                    where: {
                        nombre_conjunto: nombre_conjunto,
                        numero: numero,
                    },
                })

                if (edificio) {
                    const edificioID = edificio.dataValues.id
                    const payload = {
                        costo,
                        nombre,
                        edificioID,
                        anio_mes: actualFecha,
                    }

                    return await models.servicio
                        .create(payload)
                        .then(() => {
                            return {
                                payload: `Servicio creado exitosamente: ${JSON.stringify(
                                    payload
                                )}`,
                            }
                        })
                        .catch(() => {
                            return {
                                payload: 'Informacion Invalida de Servicio',
                            }
                        })
                } else {
                    return { payload: 'Edificio No Encontrado' }
                }
            }
        },

        async facturacionMasiva(
            root,
            { anio_mes, nombre_conjunto, numero },
            { models }
        ) {
            models.edificio.hasMany(models.apartamento)
            models.apartamento.belongsTo(models.edificio)
            models.apartamento.hasMany(models.factura)
            models.factura.belongsTo(models.apartamento)
            const actualFecha = `${anio_mes.split('-')[0]}-${
                anio_mes.split('-')[1]
            }-01`
            const edificio = await models.edificio.findOne({
                where: {
                    nombre_conjunto: nombre_conjunto,
                    numero: numero,
                },
            })
            if (edificio) {
                //Verificamos que no hayan facturas para ese edificio emitidas para la misma fecha
                const factura = await models.edificio.findOne({
                    where: {
                        nombre_conjunto: nombre_conjunto,
                        numero: numero,
                    },
                    include: {
                        model: models.apartamento,
                        include: {
                            model: models.factura,
                            where: {
                                fecha_emitida: actualFecha,
                            },
                        },
                    },
                })
                if (factura) {
                    return {
                        payload:
                            'Ya hay facturas emitidas para la fecha para el edificio elegido',
                    }
                } else {
                    const apartamentos = await models.apartamento.findAll({
                        where: {
                            edificioID: edificio.dataValues.id,
                        },
                    })
                    const servicios = await models.servicio.findAll({
                        where: {
                            edificioID: edificio.dataValues.id,
                            anio_mes: actualFecha,
                        },
                    })
                    if (apartamentos.length === 0) {
                        return {
                            payload:
                                'No Existen apartamentos actualmente registrados dentro del Edificio',
                        }
                    } else if (servicios.length === 0) {
                        return {
                            payload:
                                'No Existen servicios actualmente registrados para el Edificio',
                        }
                    } else {
                        let facturasArr = []
                        apartamentos.forEach((apartamento) => {
                            facturasArr.push({
                                estado: 'Sin Pagar',
                                fecha_emitida: actualFecha,
                                total_apartamento_pagado: 0,
                                apartamentoID: apartamento.dataValues.id,
                            })
                        })

                        await models.factura.bulkCreate(facturasArr)
                        await apartamentos.forEach(async (apartamento) => {
                            console.log(apartamento.dataValues.id)
                            await models.factura
                                .findOne({
                                    where: {
                                        apartamentoID:
                                            apartamento.dataValues.id,
                                        fecha_emitida: actualFecha,
                                    },
                                })
                                .then(async (response) => {
                                    let incluyenArr = []
                                    servicios.forEach((servicio) => {
                                        incluyenArr.push({
                                            facturaID: response.dataValues.id,
                                            servicioID: servicio.dataValues.id,
                                        })
                                    })
                                    await models.incluyen.bulkCreate(
                                        incluyenArr
                                    )
                                })
                        })
                        return {
                            payload:
                                'Facturacion Masiva Culminada exitosamente',
                        }
                    }
                }
            } else {
                return {
                    payload:
                        'El Edificio para el cual intento realizar la Facturacion Masiva No Existe...',
                }
            }
        },

        async createSuceso(
            root,
            { descripcion, titulo, fecha, nombre_conjunto, numero },
            { models }
        ) {
            const edificio = await models.edificio.findOne({
                where: {
                    nombre_conjunto: nombre_conjunto,
                    numero: numero,
                },
            })
            if (edificio) {
                return await models.suceso
                    .create({
                        descripcion,
                        titulo,
                        fecha,
                        edificioID: edificio.dataValues.id,
                    })
                    .then(() => {
                        return { payload: 'Suceso Creado Exitosamente' }
                    })
                    .catch(() => {
                        return {
                            payload:
                                'Fracaso al crear el suceso. Suceso ya creado Anteriormente',
                        }
                    })
            } else {
                return {
                    payload: 'El Edificio Especificado no Existe Actualmente',
                }
            }
        },

        async createRegistro(
            root,
            {
                nombre_visitante,
                ci_visitante,
                fecha_hora,
                nombre_conjunto,
                numero,
            },
            { models }
        ) {
            const edificio = await models.edificio.findOne({
                where: {
                    nombre_conjunto: nombre_conjunto,
                    numero: numero,
                },
            })
            if (edificio) {
                return await models.registro
                    .create({
                        nombre_visitante,
                        ci_visitante,
                        fecha_hora,
                        edificioID: edificio.dataValues.id,
                    })
                    .then(() => {
                        return { payload: 'Registro Creado Exitosamente' }
                    })
                    .catch(() => {
                        return {
                            payload:
                                'Fracaso al crear el Registro. Registro ya creado Anteriormente',
                        }
                    })
            } else {
                return {
                    payload: 'El Edificio Especificado no Existe Actualmente',
                }
            }
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
