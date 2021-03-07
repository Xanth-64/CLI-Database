import Sequelize from 'sequelize'

const sequelize = new Sequelize('bdcli', 'root', 'Aansisi64', {
    host: 'localhost',
    dialect: 'mysql',
})

const models = {
    aparcamiento: sequelize.import('./models/aparcamiento'),
    apartamento: sequelize.import('./models/apartamento'),
    areacomun: sequelize.import('./models/areacomun'),
    edificio: sequelize.import('./models/edificio'),
    email: sequelize.import('./models/email'),
    factura: sequelize.import('./models/factura'),
    gastos_extras: sequelize.import('./models/gastos_extras'),
    incluyen: sequelize.import('./models/incluyen'),
    material: sequelize.import('./models/material'),
    persona: sequelize.import('./models/persona'),
    registro: sequelize.import('./models/registro'),
    reservan: sequelize.import('./models/reservan'),
    servicio: sequelize.import('./models/servicio'),
    suceso: sequelize.import('./models/suceso'),
    telefono: sequelize.import('./models/telefono'),
}

models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models
