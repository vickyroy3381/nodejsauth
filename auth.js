const passport = require ('passport');
const GoogleStrategy = require ('passport-google-oauth2').Strategy;
//require ('dotenv').config ();
//const mongoURL = 'mongodb://127.0.0.1:27017/nodeproject';




passport.use (
  new GoogleStrategy (
    {
      clientID: '184247123083-b2uhgd7ffi4lekg02fsih81hveqns8a8.apps.googleusercontent.com',
      clientSecret: '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',
      callbackURL: 'https://nodejsauth-navjot.onrender.com/auth/google/callback',//http://localhost:5000/auth/google/callback
      passReqToCallback: true,
    },
    function (request, accessToken, refreshToken, profile, done) {
      done (null, profile);
    }
  )
);

passport.serializeUser ((user, done) => {
  done (null, user);
});

passport.deserializeUser ((user, done) => {
  done (null, user);
});
