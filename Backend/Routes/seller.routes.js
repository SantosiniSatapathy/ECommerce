module.exports = (app) =>{
    const notes = require('../Controller/sellerloginController')

    app.post('/signup' , notes.signup)
};