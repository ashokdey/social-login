const  dashBoardRoutes = require('express').Router();

dashBoardRoutes.route('/')
  .get((req, res) => {
    res.status(200).json(req.user);
  });

  module.exports = dashBoardRoutes;