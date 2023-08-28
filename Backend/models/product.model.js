module.exports = (sequelize, DataTypes) => {

const Product = sequelize.define('product' , {
    // seller_id: {
    //     type:DataTypes.STRING,
    //     references: {
    //         model: Seller,
    //         key: 'id'
    //     }
    // },
    p_name: {
        type:DataTypes.STRING
    },
    p_heading: {
        type:DataTypes.STRING
    },
    p_desc: {
        type:DataTypes.STRING
    },
    p_price: {
        type:DataTypes.STRING
    },
    p_img: {
        type:DataTypes.STRING
    },
    p_del: { // delete or active status
        type:DataTypes.BOOLEAN
    }
})
return Product
}