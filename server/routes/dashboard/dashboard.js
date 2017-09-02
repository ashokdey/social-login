const  dashBoardRoutes = require('express').Router();

dashBoardRoutes.route('/')
  .get((req, res) => {
    res.status(200).json(req.user);
  });

dashBoardRoutes.route('/logout')
  .get((req, res) => {
    req.logout();
    res.status(201).json({msg: 'bye'});
  });

  module.exports = dashBoardRoutes;