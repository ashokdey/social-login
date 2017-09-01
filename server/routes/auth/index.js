const authRoutes = require('express').Router();
const fbAuth = require('./facebook');

authRoutes.use('/facebook', fbAuth);

module.exports = authRoutes;