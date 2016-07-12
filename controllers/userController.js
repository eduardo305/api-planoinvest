const User = require('../models/user');
const UserDAO = require('../persistence/userDAO');

exports.fetchAll = function(req, res, next) {
  return UserDAO.fetchAll(req, res);
}
