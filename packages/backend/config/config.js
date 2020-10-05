const path = require('path');

const config = {
  staticPath: process.env.STATIC_PATH ?? path.join(__dirname, '../public'),
};

module.exports = config;
