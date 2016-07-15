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
    const email = request.body.email;
    const password = request.body.password;

    if (!email || !password) {
      return response.status(422).send({ error: 'You must provide email and password'});
    }

    User.findOne({ email: email }, (error, existingUser) => {
      if (error) { return next(error); }

      if (existingUser) {
        return response.status(422).send({ error: 'Email is already being used' });
      }

      const user = new User({
        email: email,
        password: password
      });

      user.save((error) => {
        if (error) { return next(error); }

        response.json({ token: tokenForUser(user) });
      });
    });
  }
}