//Modelo E-Mail
module.exports = (sequelize, DataTypes) => {
    const email = sequelize.define(
        'email',
        {
            id: {
                type: DataTypes.INTEGER,
                autoIncrement: true,
                primaryKey: true,
                allowNull: false,
            },
            personaID: {
                type: DataTypes.INTEGER,
                allowNull: true,
                references: {
                    model: 'persona',
                    key: 'id',
                },
            },
            email: {
                type: DataTypes.STRING(50),
                allowNull: false,
                unique: true,
            },
        },
        { freezeTableName: true, timestamps: false, paranoid: false }
    )
    return email
}
