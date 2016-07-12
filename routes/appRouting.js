var express = require('express');
var router = express.Router();

router.route('/').get(function(req, res) {
  res.send({message: 'This is the Plano Investimentos API'});
});

module.exports = router;
