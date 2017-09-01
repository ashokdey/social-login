'use strict';
const authCreds = require('../../../settings').oauth;
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../../models/User');

passport.use(new FacebookStrategy(
  {
    clientID: authCreds.facebook.clientID,
    clientSecret: authCreds.facebook.clientSecret,
    callbackURL: authCreds.facebook.callbackURL,
    profileFields: ['id', 'displayName', 'emails']
  }, (accessToken, refreshToken, profile, done) => {
    // console.log('**From facebook', profile._json);
    // see if the user with the given email exists
    const {name, email, id} = profile._json;
    // create the new user object
    let newUser = {name, email, socialID: [{facebook: id}]};

    User.findOne({email}).then((user) => {
      if(!user) {
        // create and save the new user 
        new User(newUser).save().then((createdUser) => {
          console.log('**User',createdUser);
          return createdUser.generateAuthToken();
        })
        .then((token) => {
          console.log('**Token: ', token);
        })
        .catch((err) => {
          console.log('**Error', err);
          done(null, err);
        });
      }
      else {
        console.log(user);
        done(null, user);
      }
    });
  }
));