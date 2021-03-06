//Modelo Telefono

module.exports = (sequelize, DataTypes) => {
    const telefono = sequelize.define(
        'telefono',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            personaID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'persona',
                    key: 'id',
                },
            },
            telefono: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                unique: true,
            },
        },
        { freezeTableName: true, timestamps: false, paranoid: false }
    )
    return telefono
}
