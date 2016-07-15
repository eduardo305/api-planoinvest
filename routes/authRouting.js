const express = require('express');
const router = express.Router();
const passport = require('passport');
const passportService = require('../services/passportServices');
const AuthController = require('../controllers/authController');

const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

router.route('/signin').post(requireSignin, AuthController.signin);
router.route('/signup').post(AuthController.signup);

module.exports = router;