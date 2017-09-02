const passport = require('passport');
const User = require('../../models/User');

passport.serializeUser((user, done) => {
  // generate token with the   user
  console.log('**Serialize user : ', user);
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  // find the  user using token 
  User.findOne({_id: id}).then((user)=> {
    done(null,{id: user._id, name: user.name, email: user.email});
  })
  .catch((err) => {
    console.log('**Find by id Error: ', err);
    done(err, null);
  })
});

require('./facebook');
require('./google');