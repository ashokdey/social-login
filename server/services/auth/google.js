const authCreds = require('../../../settings').oauth;
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const {ObjectID} = require('mongodb');
const User = require('../../models/User');


passport.use(new GoogleStrategy({
  clientID: authCreds.google.clientID,
  clientSecret: authCreds.google.clientSecret,
  callbackURL: authCreds.google.callbackURL
}, (accessToken, refreshToken, profile, done) => {
    // console.log(accessToken); 
    // console.log(refreshToken); 
    // console.log(profile); 

    const googleID = profile.id;
    
    // create user object 
    const newUser = {
      name: profile.displayName,
      email: profile.emails[0].value,
      googleID
    };

    // search if the user exists else create one 
    User.findOne({googleID}).then((user) => {
      if(!user){
        new User(newUser).save().then((createdUser) => {
          console.log('**User: ', createdUser);
          return createdUser.generateAuthToken();
        }).then((token) => {
          return console.log('**Token is', token)
        })
        .catch((err) => {
          console.log('**Error', err);
          done(null, err);
        });
      }
      else {
        console.log('Already exists', user);        
        done(null, user);
      }
    })
  }
));
