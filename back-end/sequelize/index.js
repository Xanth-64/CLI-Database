import Sequelize from 'sequelize'

const sequelize = new Sequelize('bdcli', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

const models = {
    persona: sequelize.import('./models/persona'),
    edificio: sequelize.import('./models/edificio'),
    areacomun: sequelize.import('./models/areacomun'),
}

models.sequelize = sequelize
models.Sequelize = Sequelize

module.exports = models
