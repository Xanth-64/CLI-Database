//Modelo Apartamento
module.exports = (sequelize, Datatypes) => {
    const Apartamento = sequelize.define(
        "Apartamentos"
        ,{
            id: {
                type: Datatypes.INTEGER,
                autoIncrement = true,
                primaryKey = true,
                allowNull = false
            },
            numeroPiso: {
                type: Datatypes.INTEGER.UNSIGNED,
                allowNull: false,
            },
            letraApto:{
                type: Datatypes.STRING(1),
                allowNull: false,
            },
            superficie: {
                type: Datatypes.INTEGER.UNSIGNED,
                allowNull: false,
            }
        })
    return Apartamento
}