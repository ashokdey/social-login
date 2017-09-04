require('./config');
const cookie = require('../settings').cookie;
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const cookieSession = require('cookie-session');
const passport = require('passport');
const morgan = require('morgan');
const path = require('path');

// require DB to connect to the database 
require('./db');
// require the passport service 
require('./services/auth');

// require routes 
const authRoutes = require('./routes/auth');
const apiRoutes = require('./routes/api');

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
app.use(morgan('dev'));

app.use(express.static(path.resolve(__dirname, '../client/build/')));

// routes 

app.use('/', apiRoutes);
app.use('/auth', authRoutes);
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build/index.html'));
});

app.listen(port, () => {
  console.log('app running at: http://localhost:', port);
});