//Modelo Material

module.exports = (sequelize, DataTypes) => {
    const material = sequelize.define(
        'material',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            cantidad: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
            },
            tipo: {
                type: DataTypes.STRING(20),
                allowNull: false,
            },
            nombre: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: 'identifier',
            },
            edificioID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'edificio',
                    key: 'id',
                },
                unique: 'identifier',
            },
        },
        { freezeTableName: true, timestamps: false, paranoid: false }
    )
    return material
}
