'use strict';

const User = require('../models/User');

const authenticate = (req, res, next) => {
  // get token from custom header 
  const token = req.header('X-Auth');

  // find the user with this token 
  User.findByToken(token)
    .then((user) => {
      if(!user){
        return Promise.reject('Invalid Token');
      }

      // send the user email and _id with the req body 
      req.user = {
        _id: user._id,
        email: user.email.facebook
      };
      req.token = token;
      next();
  })
  .catch((err) => {
    res.status(401).json({
      status: 'failed',
      msg: 'Unauthorized'
    });
  });
}