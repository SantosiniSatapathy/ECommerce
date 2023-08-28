const {Sequelize, DataTypes} = require('sequelize');

const sequelize = new Sequelize('e_comm', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
    logging: true,
    pool: {}
})

sequelize.authenticate()
.then(() => {
    console.log('DB connected');
}).catch((err) => {
    console.log('Error', err);
})

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;


// {force: true}
db.sequelize.sync({force: true}).then(() => {
    console.log('Sync DB');
}).catch((err) => {
    console.log('ERR', err);
})



db.seller = require('./seller.model')(sequelize, DataTypes)
db.product = require('./product.model')(sequelize, DataTypes)
db.order = require('./order.model')(sequelize, DataTypes)


db.seller.hasMany(db.product, { foreignKey: 'seller_id' });
db.product.belongsTo(db.seller, { foreignKey: 'seller_id' });
db.seller.hasMany(db.order, { foreignKey: 'consumer_id' });
db.order.belongsTo(db.seller, { foreignKey: 'consumer_id' });


module.exports = db;
