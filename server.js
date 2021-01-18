// require("dotenv").config();
const express = require("express");
const session = require("express-session")
const logger = require("morgan");
// const compression = require("compression");
const cors = require('cors');
// const passport = require('passport');
// require("./config/passport")(passport);
const passport = require("./config/passport");
// const cookieParser = require("cookie-parser");
const flash = require("connect-flash");
const db = require("./models");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3001;

// middleware
app.use(logger("dev"));
// app.use("/uploads", express.static("uploads"));
// app.use(compression());
app.use(cors({ origin: "http://localhost:3000", credentials: true })); //react and server communciation for data transfer //
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
// app.use(cookieParser("keyboard cat"));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

// making flash messages available to the front-end
app.use((req, res, next) => {
  res.locals.successMsg = req.flash("successMsg");
  res.locals.errorMsg = req.flash("errorMsg");
  res.locals.error = req.flash("error");
  next();
});

app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// IMPORTANT: { force: true } when changing data structures and upon initialization; else { force: false }
db.sequelize
  .sync({ force: false }) 
  .then(() => {
    app.listen(PORT, () => {
      console.log(`🌎  ==> API Server now listening on PORT ${PORT}! Go to https://localhost:${PORT}`);
    });
  })
  .catch(err => console.log("Error with sequelize:", err));