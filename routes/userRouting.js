const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.route('/').get(userController.fetchAll);
router.route('/:id').get(userController.fetchUser);

module.exports = router;
