// import the configs
const server = require('../../settings').server;
const env = process.env.NODE_ENV || 'development';

if(env === 'development'){
  process.env.PORT = server.port;
  process.env.MONGODB_URI = server.mongodbURI; 
}

console.log('***Working in :', env);
