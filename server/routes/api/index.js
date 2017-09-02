const apiRoutes = require('express').Router();
const dashBoardRoutes = require('./helperRoutes');

apiRoutes.use('/api', dashBoardRoutes);

module.exports = apiRoutes;