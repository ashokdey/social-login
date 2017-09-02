const panelRoutes = require('express').Router();
const dashBoardRoutes = require('./dashboard');

panelRoutes.use('/dashboard', dashBoardRoutes);

module.exports = panelRoutes;