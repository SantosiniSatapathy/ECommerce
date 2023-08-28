const db = require('../models/db')
const seller = db.seller

async function signup(req, res) {
    try {
      const { name, email, password } = req.body;

      // Create a new user record in the database
      const user = await seller.create({
        name,
        password,
        email,
      });

      // Return a success response
      return res.status(201).json({ message: 'Signup successful', user });

    } catch (error) {
      // Handle any errors that occur during the signup process
      console.error(error);
      return res.status(500).json({ message: 'Internal server error' });
    }
  }

  module.exports = {
    signup
  };