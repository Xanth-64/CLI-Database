//Modelo Suceso

module.exports = (sequelize, DataTypes) => {
    const suceso = sequelize.define(
        'suceso',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            descripcion: {
                type: DataTypes.STRING(500),
                allowNull: false,
            },
            titulo: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: 'identificador',
            },
            fecha: {
                type: DataTypes.DATEONLY,
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
    return suceso
}
