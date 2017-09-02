'use strict';
const authCreds = require('../../../settings').oauth;
const passport = require('passport');
const FacebookStrategy = require('passport-facebook').Strategy;
const {ObjectID} = require('mongodb');
const User = require('../../models/User');

passport.use(new FacebookStrategy(
  {
    clientID: authCreds.facebook.clientID,
    clientSecret: authCreds.facebook.clientSecret,
    callbackURL: authCreds.facebook.callbackURL,
    proxy: true,
    profileFields: ['id', 'displayName', 'emails']
  }, (accessToken, refreshToken, profile, done) => {
    // console.log('**From facebook', profile._json);
    // see if the user with the given email exists
    const {name, email, id} = profile._json;
    // create the new user object
    let newUser = {name, email, facebookID: id};

    User.findOne({facebookID: id}).then((user) => {
      if(!user) {
        // create and save the new user 
        new User(newUser).save().then((createdUser) => {
          console.log('**User',createdUser);
          done(null, createdUser);
        })
        .catch((err) => {
          console.log('**Error', err);
          done(null, err);
        });
      }
      else {
        // console.log('Already exists', user);
        done(null, user);
      }
    })
    .catch((err) => {
      done(err, null);
    });
  }
));