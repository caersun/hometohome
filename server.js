// const compression = require("compression");
const flash = require("connect-flash");

const express = require("express");
const session = require("express-session")
const logger = require("morgan");
const cors = require("cors");
const path = require("path");
// const sslRedirect = require("heroku-ssl-redirect");

const passport = require("./config/passport");
const db = require("./models");
const routes = require("./routes");


const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(logger("dev"));
// app.use(compression());
app.use(cors({})); // react and server communciation for data transfer
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());
// app.use(sslRedirect);

// making flash messages available to the front-end
app.use((req, res, next) => {
  res.locals.successMsg = req.flash("successMsg");
  res.locals.errorMsg = req.flash("errorMsg");
  res.locals.error = req.flash("error");
  next();
});

app.use(routes);

// Send the HTML file for requests to root URL
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "client/build/index.html"));
});

// route redirect to https
// app.all("*", (req, res, next) => {
//   if (req.headers["x-forwarded-proto"] !== "https") {
//     res.redirect("https://" + req.headers.host + req.url);
//   } else {
//     next(); // continue to other routes if not redirecting
//   }
// })

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// IMPORTANT: { force: true } when changing data structures and upon initialization; else { force: false }
db.sequelize
  .sync({ force: false }) 
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
    });
  })
  .catch(err => console.log("Error with sequelize:", err));