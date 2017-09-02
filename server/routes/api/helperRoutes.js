const  helperRoutes = require('express').Router();

helperRoutes.route('/current_user')
  .get((req, res) => {
    res.status(200).json(req.user);
  });

helperRoutes.route('/logout')
  .get((req, res) => {
    req.logout();
    res.status(201).json({msg: 'bye'});
  });

  module.exports = helperRoutes;