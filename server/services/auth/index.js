const passport = require('passport');
const User = require('../../models/User');

passport.serializeUser((user, done) => {
  // generate token with the   user
  console.log('**Serialize user : ', user);
  user.generateAuthToken().then((token) => {
    console.log('***Token :', token);
    done(null, token);
  }).catch((err) => {
    console.log('***Error :', err);    
    done(err, null);
  })
});

passport.deserializeUser((token, done) => {
  // find the  user using token 
  User.findByToken(token).then((user)=> {
    console.log('**Find by token', user);
    done(null,{id: user.id, name: user.name, email: user.email, token: user.tokens[0]});
  })
  .catch((err) => {
    console.log('**Find by token Error: ', err);
    done(err, null);
  })
});

require('./facebook');
require('./google');