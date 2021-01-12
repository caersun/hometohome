// const passport = require('passport');
const LocalStrategy = require("passport-local").Strategy;
// const JwtStrategy = require("passport-jwt").Strategy;
// const ExtractJwt = require("passport-jwt").ExtractJwt;

// const opts = {};
//function that accepts requests as the only parameter and return JWT as string or null//creates a new extractor that looks for the JWT in the given http header
// opts.jwtFromRequest = ExtractJwt.fromHeader("login_token");
//string or buffer with secret
// opts.secretOrKey = process.env.jwtSecret;

// const mongoose = require('mongoose');
// const User = mongoose.model('Users');
const db = require("./../models");

module.exports = function (passport) {
//   passport.use(
//     new JwtStrategy(opts, function (jwt_payload, done) {
//       console.log("jwt_payload", jwt_payload);

//       db.User.findOne({ _id: jwt_payload._id }, function (err, user) {
//         user.hash = undefined;
//         if (err) {
//           return done(err, false);
//         }
//         if (user) {
//           return done(null, user);
//         } else {
//           return done(null, false);
//         }
//       });
//     })
//   );

  passport.use("local", new LocalStrategy({ usernameField: "email" }, function (email, password, done) {
        db.User.findOne({ where: { email: email } }).then(function (user, err) {
        // console.log("inside passport.js", user, err);
          if (err) {
            return done(err);
          }
          if (!user) {
            return done(null, false, { message: "Incorrect email." });
          }
          if (!user.validatePassword(password)) {
            return done(null, false, { message: "Incorrect password." });
          }
          user.hash = undefined; 
          return done(null, user);
        });
    }));

  passport.serializeUser((user, cb) => {
    cb(null, user);
  });

  passport.deserializeUser((obj, cb) => {
    cb(null, obj);
  });
};
