//Modelo Edificio
module.exports = (sequelize, DataTypes) => {
    const edificio = sequelize.define(
        'edificio',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            nombre_conjunto: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: 'nombre',
            },
            numero: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                unique: 'nombre',
            },
        },
        { freezeTableName: true, timestamps: false }
    )
    return edificio
}
