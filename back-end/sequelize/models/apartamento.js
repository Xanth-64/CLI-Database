//Modelo Apartamento
module.exports = (sequelize, DataTypes) => {
    const apartamento = sequelize.define(
        'apartamento',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            n_piso: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                unique: 'identificador',
            },
            letraApto: {
                type: DataTypes.CHAR(1),
                allowNull: false,
                unique: 'identificador',
            },
            superficie: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
            },
            alicuota: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
            },
            personaID: {
                type: DataTypes.INTEGER,
                references: {
                    model: 'persona',
                    key: 'id',
                },
                allowNull: false,
            },
            registro_inmobiliario: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            edificioID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'edificio',
                    key: 'id',
                },
                unique: 'identificador',
            },
        },
        { freezeTableName: true, timestamps: false, paranoid: false }
    )
    return apartamento
}
