require('./config');
const express = require('express');
const bodyparser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// require DB to connect to the database 
require('./db');


const port = process.env.PORT;


const app = express();
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended: false}));
// for CORS
app.use(cors());
// forcustom header 
app.use((req, res, next) => {
  res.setHeader('Access-Control-Expose-Headers','X-Powered-By',  'X-Auth');
  next();
})

// for logging requests 
app.use(morgan('dev'));


app.listen(port, () => {
  console.log('app running at: http://localhost:', port);
});