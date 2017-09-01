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

    const email = profile.emails[0].value;
    
    // create user object 
    const newUser = {
      name: profile.displayName,
      email: email,
      socialID: [{google: profile.id}]
    };

    // search if the user exists else create one 
    User.findOne({email}).then((user) => {
      if(!user){
        new User(newUser).save().then((createdUser) => {
          console.log('**User: ', createdUser);
          return createdUser.genarateAuthToken();
        }).then((token) => {
          return console.log('**Token is', token)
        })
        .catch((err) => {
          console.log('**Error', err);
          done(null, err);
        });
      }
      else {
        done(null, user);
      }
    })
  }
));
