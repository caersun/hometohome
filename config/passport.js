const bCrypt = require("bcryptjs");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const db = require("./../models");

// singup functionality
passport.use(
  "local-signup",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    function (req, email, password, done) {
      const generateHash = function (password) {
        console.log("let's check what being passed in", password);
        return bCrypt.hashSync(password, bCrypt.genSaltSync(10), null);
      };
      db.Cook.findOne({ where: { email: email } }).then(function (user, err) {
        if (err) {
          return done(err);
        }
        if (user) {
          return done(null, false, { message: "Email address already in use" });
        } else {
          const userPassword = generateHash(password);
          const data = {
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: email,
            password: userPassword,
          };

          db.Cook.create(data).then(function (newUser, created) {
            if (!newUser) {
              return done(null, false);
            }

            if (newUser) {
              return done(null, newUser);
            }
          });
        }
      });
    }
  )
);

passport.use(
  "local-login",
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
      passReqToCallback: true,
    },
    function (req, email, password, done) {
      const isValidPassword = (password, userpw) => {
        return bCrypt.compareSync(password, userpw);
      };

      db.Cook.findOne({ where: { email: email } })
        .then(function (user) {
          if (!user) {
            return done(null, false, { message: "No matching email" });
          }

          if (!isValidPassword(password, user.password)) {
            return done(null, false, { message: "Incorrect password" });
          }

          const userInfo = user.get();
          return done(null, userInfo);
        })
        .catch((err) => {
          return done(null, false, {
            message: "Something went wrong with your login",
          });
        });
    }
  )
);

passport.serializeUser((user, cb) => {
  cb(null, user);
});

passport.deserializeUser((obj, cb) => {
  cb(null, obj);
});

module.exports = passport;

// const JwtStrategy = require("passport-jwt").Strategy,
// ExtractJwt = require("passport-jwt").ExtractJwt;
// const opts = {};

// function that accepts requests as the only parameter and return JWT as string or null
// creates a new extractor that looks for the JWT in the given http header
// opts.jwtFromRequest = ExtractJwt.fromHeader("login_token");
// string or buffer with secret
// opts.secretOrKey = process.env.jwtSecret;

// const mongoose = require('mongoose');
// const User = mongoose.model('Users');

// module.exports = function (passport) {
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

// passport.use("local", new LocalStrategy({ usernameField: "email" }, function (email, password, done) {
//   db.User.findOne({ where: { email: email } }).then(function (user, err) {
//   // console.log("inside passport.js", user, err);
//     if (err) {
//       return done(err);
//     }
//     if (!user) {
//       return done(null, false, { message: "Incorrect email." });
//     }
//     if (!user.validatePassword(password)) {
//       return done(null, false, { message: "Incorrect password." });
//     }
//     user.hash = undefined;
//     return done(null, user);
//   });
// }));
// };
