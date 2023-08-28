const { DataTypes } = require('sequelize');
const db = require('../db')


const Seller = db.define('Seller' , {
    name: {
        type:DataTypes.STRING
    },
    password:{
        type:DataTypes.STRING
    },
    email: {
        type:DataTypes.STRING
    }
},
{

})


// async function initialize() {
//     try {
//       await db.sync(); // This will create the table based on the model

//       console.log('Table created successfully.');
//     } catch (error) {
//       console.error('Unable to create the table:', error);
//     }
//   }

//   initialize();



module.exports = Seller