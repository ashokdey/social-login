const googleAuth = require('express').Router();
const passport = require('passport');

googleAuth.route('/')
  .get(passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

googleAuth.route('/callback')
  .get(passport.authenticate('google'));


module.exports = googleAuth;