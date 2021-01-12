const express = require("express");
const session = require("express-session")
const logger = require("morgan");
// const compression = require("compression");
const cors = require('cors');
const passport = require('passport');
const cookieParser = require("cookie-parser");

const db = require("./models");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(logger("dev"));
// app.use(compression());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors({ origin: "http://localhost:3000", credentials: true })); //react and server communciation for data transfer
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(cookieParser("keyboard cat"));

app.use(passport.initialize());
app.use(passport.session());
require("./config/passport")(passport);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  // const path = require('path');
  // app.get('*', (req, res) => {
  //   res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
  // });
}

app.use(routes);

// app.post("/login", (req, res, next) => {
// //   passport.authenticate("local", (err, user, infoCB) => {
// //     if (!user) res.send("No user exists");
// //     else {
// //       req.logIn(user, err => {
// //         res.send("Successfully authenticated");
// //         console.log(req.user);
// //       })
// //     }
// //   })
// // }
// // (req, res, next) => {
//   passport.authenticate("local", (err, user, infoCB) => {
//     // if (err) throw err;
//     if (!user) res.send("No user exists");
//     else {
//       req.logIn(user, err => {
//         // if (err) throw err;
//         res.send("Successfully authenticated");
//         console.log(req.user);
//       })
//     }
//   })(req, res, next); }
// );
// app.post("/register", (req, res) => {
//   console.log("in register route", req.body);
//   db.User.create({
//     fullName: req.body.fullName,
//     email: req.body.email,
//     hash: req.body.password
//   });
// });
// probably want this route to be /api/users/:id?
// app.get("/user", (req, res) => {
//   console.log(req.body);
// });
//create a new post to login
// app.post('/login',
//   passport.authenticate('local', {
//       successRedirect: '/',
//       failureRedirect: '/login'
//   }
// ));
// require('./models/Users');
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hometohome");

// IMPORTANT: { force: true } when changing data structures and upon initialization; else { force: false }
db.sequelize
  .sync({ force: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}! Go to https://localhost:${PORT}`);
    });
  })
  .catch(err => console.log("Error with sequelize:", err));