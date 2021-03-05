//Modelo Area Comun
module.exports = (sequelize, DataTypes) => {
    const areacomun = sequelize.define(
        'areacomun',
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
            tipo: {
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
        { freezeTableName: true, timestamps: false, paranoid: false }
    )
    return areacomun
}
