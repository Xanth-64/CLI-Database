//Modelo Servicio

module.exports = (sequelize, DataTypes) => {
    const servicio = sequelize.define(
        'servicio',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            nombre: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: 'uc_servicio',
            },
            anio_mes: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                unique: 'uc_servicio',
            },
            costo: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
            },
            edificioID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'edificio',
                    key: 'id',
                },
                unique: 'uc_servicio',
            },
        },
        { freezeTableName: true, timestamps: false, paranoid: false }
    )
    return servicio
}
