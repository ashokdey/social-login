const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const validator = require('validator');
const settings = require('../../settings');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 5,
    trim: true
  },
  email: {
    type: String,
    unique: true,
    minlength: 5,
    required: true,
    validate: {
      isAsync: true,
      validator: validator.isEmail,
      message: '{value} is not a valid email'
    }
  },
  googleID: {
    type: String
  },
  facebookID: {
    type: String
  },
  twitterID: {
    type: String
  },
  // password: {
  //   type: String,
  //   minlength: 6,
  //   required: true,
  //   trim: true
  // }, 
  tokens : [{
    access: {
      type: String,
      require: true
    },
    token: {
      type: String,
      required: true
    }
  }]
});

userSchema.methods.generateAuthToken = function(){
  let user = this;
  let access = 'auth';
  let token = jwt.sign({_id: user._id.toHexString(), access}, settings.jwt.secret, { expiresIn: '1h' }).toString();

  // push the token into the DB 
  user.tokens.push({access, token});

  return user.save().then(() => {
    return token;
  });
}

// userSchema.methods.updateToken = function(token) {
//   let user = this;
//   return user.update({
//     $pull: {
//       tokens: {
//         token // es6 shortcut object literal syntax
//       }
//     }
//   });
// };

// pre hook to hash password 
// userSchema.pre('save', function(next){
//   let user = this;

//   if(user.isModified('password')){
//     bcrypt.genSalt(10, (err, salt) => {
//       if(err){
//         throw new Error(err);
//       }

//       bcrypt.hash(user.password, salt, (err, hash) => {
//         user.password = hash;
//         next();
//       });
//     });
//   }
//   else {
//     next();
//   }
// });

userSchema.statics.findByToken = function(token){
  let User = this;
  let decoded = null;

  try{
    decoded = jwt.verify(token, settings.jwt.secret);
  }
  catch(err){
    return Promise.reject('No user found with given token');
  }

  return User.findOne({
    _id: decoded._id,
    'tokens.token': token,
    'toekn.access': access
  });
}


// userSchema.statics.findByCredentials = function(email, password){
//   let User = this;
//   return User.findOne({email}).then(user => {
//     if(!user){
//       return Promise.reject('Invalidemail. No user found.');
//     }

//     return new Promise((resolve, reject) => {
//       // compare hash 
//       bcrypt.compare(password, user.password, (err, result) => {
//         if(err){
//           reject('Incorrect Password');
//         }
//         resolve(user);
//       });
//     });
//   });
// };

module.exports = mongoose.model('User', userSchema);