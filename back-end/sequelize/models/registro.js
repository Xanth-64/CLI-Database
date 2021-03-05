//Modelo Registro

module.exports = (sequelize, DataTypes) => {
    const registro = sequelize.define(
        'registro',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            nombre_visitante: {
                type: DataTypes.STRING(50),
                allowNull: false,
            },
            fecha_hora: {
                type: DataTypes.DATE,
                allowNull: false,
                unique: 'identificador',
            },
            ci_visitante: {
                type: DataTypes.INTEGER.UNSIGNED,
                allowNull: false,
                unique: 'identificador',
            },
            edificioID: {
                type: DataTypes.INTEGER,
                allowNull: false,
                references: {
                    model: 'edificio',
                    key: 'id',
                },
            },
        },
        { freezeTableName: true, timestamps: false, paranoid: false }
    )
    return registro
}
