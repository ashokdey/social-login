const config = {
  server: {
    port: 5050,
    mongodbURI: 'mongodb://127.0.0.1:27017/ReactTunes'
  },
  jwt: {
    secret:  'anyrandomvariablevaluedadaaasdaasadak;k;ks;ksd;ks;fsd'
  },
  cookie: {
    maxAge: 5 * 60 * 1000,
    key: 'lhjkluljlgmbjkg;ipadadada8dfgdfgdfg80ikjhkgjkhbjgvghvbbkbnkhkhkh'
  },
  oauth: {
    facebook: {
      clientID: '1444953775559638',
      clientSecret: 'eb28c2cd234775303c4eae33e0ac03ad',
      callbackURL: '/auth/facebook/callback/'
    },
    twitter: {
      consumerKey: '',
      consumerSecret: '',
      callbackURL: '/auth/twitter/callback/'
    },
    google: {
      clientID: '544201087166-h3814jgsusojjqooq2nmqqrrbdrtolfc.apps.googleusercontent.com',
      clientSecret: 'HMdn3O5zfk55U9sFv4Bsn-h4',
      callbackURL: '/auth/google/callback'      
    }
  }
};

module.exports = config;