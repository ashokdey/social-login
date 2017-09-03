const googleAuth = require('express').Router();
const passport = require('passport');

googleAuth.route('/')
  .get(passport.authenticate('google', {
    scope: ['profile', 'email']
  }));

googleAuth.route('/callback')
  .get(passport.authenticate('google'), (req, res) => {
    // succesfullylogged in , redirect to dashboard 
    res.redirect('/');
  });


module.exports = googleAuth;