const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.route('/').get(userController.fetchAll);

module.exports = router;
