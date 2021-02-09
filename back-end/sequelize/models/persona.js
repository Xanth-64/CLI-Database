module.exports = (sequelize, DataTypes) => {
    const persona = sequelize.define(
        'persona',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            nombre: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            apellido: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            extranjeria: {
                type: DataTypes.STRING(1),
                allowNull: false,
                unique: 'cedula',
            },
            numero_ci: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                unique: 'cedula',
            },
            edad: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
            },
        },
        { freezeTableName: true, timestamps: false, paranoid: false }
    )
    return persona
}
