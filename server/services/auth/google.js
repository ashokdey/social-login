const authCreds = require('../../../settings').oauth;
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../../models/User');


passport.use(new GoogleStrategy({
  clientID: authCreds.google.clientID,
  clientSecret: authCreds.google.clientSecret,
  callbackURL: authCreds.google.callbackURL
}, (accessToken, refreshToken, profile, done) => {
    console.log(accessToken); 
    console.log(refreshToken); 
    console.log(profile); 
  }
));
