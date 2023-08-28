module.exports = (sequelize, DataTypes) => {

    const Seller = sequelize.define('seller', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        name: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        },
        email: {
            type: DataTypes.STRING
        },
        type: { // seller or consumer
            type: DataTypes.STRING
        },
        isDelete: { // delete status
            type: DataTypes.BOOLEAN
        }
    })
        return Seller;
}
