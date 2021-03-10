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

// login functionality
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