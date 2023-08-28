const express = require('express')
const db = require('../Backend/db');
const bodyParser = require("body-parser");
const Seller = require('../Backend/models/seller.model')
const app = express();
const sequelize = require('sequelize')
const cors = require('cors');


db.authenticate()
  .then(() => {
    console.log('Database connection established successfully.');
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error);
  });

app.use(bodyParser.json() , cors());

Seller.sync({force : true})


require('./Routes/seller.routes')(app)

app.listen(3000, () => { // The app.listen function is responsible for starting the Express server
  console.log("server listen on port 3000");
})