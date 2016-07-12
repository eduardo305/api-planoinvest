const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const appRouting = require('./routes/appRouting');
const config = require('./config/config');

const app = express();

app.use(appRouting);

app.listen(config.port, function() {
  console.log('Server started at port:' + config.port);
});
