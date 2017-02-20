const jwt = require('jwt-simple');
const config = require('../config/config');

const User = require('../models/user');

tokenForUser = (user) => {
  const timestamp = new Date().getTime();
  
  return jwt.encode({ sub: user.id, iat: timestamp}, config.secret);
}

module.exports = {
  signin: (request, response, next) => {
      response.send({ token: tokenForUser(request.user)});
  },

  signup: (request, response, next) => {
    const email = request.body.user.email;
    const password = request.body.user.password;
    const firstName = request.body.user.firstName;
    const lastName = request.body.user.lastName;
    const phone = request.body.user.phone;
    const address = request.body.user.address;
    const state = request.body.user.state; 
    const city = request.body.user.city;

    if (!email || !password) {
      return response.status(422).send({ error: 'You must provide email and password'});
    }

    User.findOne({ email: email }, (error, existingUser) => {
      if (error) { return next(error); }

      if (existingUser) {
        return response.status(422).send({ error: 'Email is already being used' });
      }

      const user = new User({
        email,
        password,
        firstName,
        lastName,
        phone,
        address,
        state,
        city
      });

      user.save((error) => {
        if (error) { return next(error); }

        response.json({ token: tokenForUser(user) });
      });
    });
  }
}