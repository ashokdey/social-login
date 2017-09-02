require('./config');
const cookie = require('../settings').cookie;
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const cookieSession = require('cookie-session');
const passport = require('passport');
const morgan = require('morgan');

// require DB to connect to the database 
require('./db');
// require the passport service 
require('./services/auth');

// require routes 
const authRoutes = require('./routes/auth');
const panelRoutes = require('./routes/dashboard');

const port = process.env.PORT;


const app = express();
app.use(cookieSession({
  maxAge: cookie.maxAge,
  keys: [cookie.key]
}));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
// for CORS
app.use(cors());
// forcustom header 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Expose-Headers','X-Powered-By',  'X-Auth');
  next();
});
app.use(passport.initialize());
app.use(passport.session());


// routes 
app.use('/auth', authRoutes);
app.use('/app', panelRoutes);

// for logging requests 
app.use(morgan('dev'));


app.listen(port, () => {
  console.log('app running at: http://localhost:', port);
});