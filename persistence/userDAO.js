const User = require('../models/user');

const UserDAO = {
  fetchAll: () => {
    return new Promise((fulfill, reject) => {
      User.find({}, (error, users) => {
        if (error) {
          reject(error);
        } else {
          fulfill(users);
        }
      });
    });
  },

  fetchUser: (id) => {
    return new Promise((fulfill, reject) => {
      User.findById(id, (error, user) => {
        if (error) {
          reject(error);
        } else {
          fulfill(user);
        }
      });
    });
  }
};

module.exports = UserDAO;
