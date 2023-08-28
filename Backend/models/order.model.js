module.exports = (sequelize, DataTypes) => {

    const Order = sequelize.define('order', {
        o_add: {
            type: DataTypes.STRING
        },
        o_pin: {
            type: DataTypes.STRING
        },
        o_contact: {
            type: DataTypes.STRING
        },
        o_mail: {
            type: DataTypes.STRING
        },
        payment_method: {
            type: DataTypes.STRING,
            defaultValue: 'COD'
        },
        p_id: {
            type: DataTypes.JSON
        }
    })
    return Order
}