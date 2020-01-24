const express = require('express');
const config = require('../config');
const user = require('./components/user/network');
const app = express();

// ROUTER
app.use('/api/user', user);

app.listen(config.api.port, () => {
  console.log('API on port', config.api.port);
})