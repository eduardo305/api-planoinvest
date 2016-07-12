const User = require('../models/user');

const UserDAO = {
  fetchAll: function(req, res) {
    User.find({}, function(err, users) {
      if (err) { return next(err); }

      res.json({ success: true, users: users });
    });
  }
};

module.exports = UserDAO;
