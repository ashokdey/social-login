const fbAuth = require('express').Router();
const passport = require('passport');

fbAuth.route('/')
  .get(passport.authenticate('facebook', {
    scope: ['email']
  }));

fbAuth.route('/callback')
  .get(passport.authenticate('facebook'), (req, res) => {
    // succesfullylogged in , redirect to dashboard 
    res.redirect('/');
  });

module.exports = fbAuth;