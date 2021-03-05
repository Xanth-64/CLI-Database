//Modelo Relación Incluyen Servicio-Factura

module.exports = (sequelize, DataTypes) => {
    const incluyen = sequelize.define(
        'incluyen',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            servicioID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'servicio',
                    key: 'id',
                },
            },
            facturaID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'factura',
                    key: 'id',
                },
            },
        },
        { freezeTableName: true, timestamps: false, paranoid: false }
    )
    return incluyen
}
