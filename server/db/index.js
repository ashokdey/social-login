'use strict';

require('../config');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose.connect(process.env.MONGODB_URI, {useMongoClient: true})
  .then(() => console.log('connected to  MongoDB'))
  .catch((err) => {
    console.log(err.message);
    process.exit(-1);
  });

module.exports = mongoose;