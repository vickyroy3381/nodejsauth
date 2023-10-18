const passport = require ('passport');
const GoogleStrategy = require ('passport-google-oauth2').Strategy;
//require ('dotenv').config ();
//const mongoURL = 'mongodb://127.0.0.1:27017/nodeproject';




passport.use (
  new GoogleStrategy (
    {
      clientID: '7721274803-0ne13d4l0ftj6jadbplvamq1p53cn2uh.apps.googleusercontent.com',
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
