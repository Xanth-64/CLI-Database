//Modelo Aparcamiento
module.exports = (sequelize, DataTypes) => {
    const aparcamiento = sequelize.define(
        'aparcamiento',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            pisosub: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                unique: 'codigo',
            },
            numero: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                unique: 'codigo',
            },
            letra: {
                type: DataTypes.CHAR(1),
                allowNull: false,
                unique: 'codigo',
            },
            personaID: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'persona',
                    key: 'id',
                },
            },
            edificioID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'edificio',
                    key: 'id',
                },
                unique: 'codigo',
            },
        },
        { freezeTableName: true, timestamps: false, paranoid: false }
    )
    return aparcamiento
}
