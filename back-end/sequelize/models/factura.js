//Modelo Factura
module.exports = (sequelize, DataTypes) => {
    const factura = sequelize.define(
        'factura',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            estado: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            fecha_emitida: {
                type: DataTypes.DATEONLY,
                allowNull: false,
                unique: 'identifier',
            },
            total_apartamento_pagado: {
                type: DataTypes.INTEGER,
            },
            apartamentoID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'apartamento',
                    key: 'id',
                },
                unique: 'identifier',
            },
        },
        { freezeTableName: true, timestamps: false, paranoid: false }
    )
    return factura
}
