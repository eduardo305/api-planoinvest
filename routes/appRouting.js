var express = require('express');
var router = express.Router();

var passport = require('passport');
var requireAuth = passport.authenticate('jwt', { session: false });

router.route('/').get((request, response) => {
  response.send({message: 'This is the Plano Investimentos API'});
});

router.route('/panorama').get(requireAuth, (request, response) => {
  response.send({ message: 'This is the Panorama Matinal'});
});

module.exports = router;
