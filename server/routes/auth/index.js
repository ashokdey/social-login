const authRoutes = require('express').Router();
const fbAuth = require('./facebook');
const googleAuth = require('./google');

authRoutes.use('/facebook', fbAuth);
authRoutes.use('/google', googleAuth);

module.exports = authRoutes;