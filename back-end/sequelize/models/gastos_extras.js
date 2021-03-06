//Modelo Gastos Extras
module.exports = (sequelize, DataTypes) => {
    const gastos_extras = sequelize.define(
        'gastos_extras',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            monto: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
            },
            nombre: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: 'uc_gastos',
            },
            anio_mes: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                unique: 'uc_gastos',
            },
            apartamentoID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'apartamento',
                    key: 'id',
                },
                unique: 'uc_gastos',
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
    return gastos_extras
}
