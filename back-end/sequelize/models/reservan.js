//Modelo Reservan

module.exports = (sequelize, DataTypes) => {
    const reservan = sequelize.define(
        'reservan',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            areaID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'areacomun',
                    key: 'id',
                },
                unique: 'identificador',
            },
            personaID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'persona',
                    key: 'id',
                },
            },
            momento: {
                type: DataTypes.DATE,
                allowNull: false,
                references: {
                    model: 'persona',
                    key: 'id',
                },
                unique: 'identificador',
            },
        },
        { freezeTableName: true, timestamps: false, paranoid: false }
    )
    return reservan
}
