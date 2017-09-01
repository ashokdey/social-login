// import the configs
const settings = require('../../settings');

const env = process.env.NODE_ENV || 'development';

if(env === 'development'){
  process.env.PORT = settings.server.port;
  process.env.MONGODB_URI = settings.server.mongodbURI; 
}

console.log('***Working in :', env);