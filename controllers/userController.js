const User = require('../models/user');
const UserDAO = require('../persistence/userDAO');
const Controller = require('./controller');

exports.fetchAll = (request, response, next) => {
  UserDAO.fetchAll()
    .then(Controller._success(response))
    .catch(Controller._error(response));
}

exports.fetchUser = function(request, response, next) {
  UserDAO.fetchUser(request.params.id)
    .then(Controller._success(response))
    .catch(Controller._error(response));
}
