const express = require('express');
const cors = require('cors');
const config = require('./config/config');
const router = require('./router');

// create express app instance
const app = express();
// CORS
app.use(cors());
// mount json body parser mw
app.use(express.json());

// static files
app.use(express.static(config.staticPath));

// mount routing
app.use('/api', router);

// error handler
app.use((err, req, res, next) => {
  if (res.headerSent) {
    return;
  }
  res.status(500).send({
    errors: [err],
  });
});

module.exports = app;
