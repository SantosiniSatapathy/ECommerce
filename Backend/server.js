const express = require('express')
const db = require('./models/db');
const bodyParser = require("body-parser");
const Seller = require('../Backend/models/seller.model')
const Product = require('../Backend/models/product.model')
const app = express();
const sequelize = require('sequelize')
const cors = require('cors');

app.use(bodyParser.json() , cors());


require('./Routes/seller.routes')(app)

app.listen(8000, () => { // The app.listen function is responsible for starting the Express server
  console.log("server listen on port 8000");
})