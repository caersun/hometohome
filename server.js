const express = require("express");
const session = require("express-session")
require('dotenv').config();
// require('./models/Users.js');
const cors = require('cors');
const passport = require('passport');

const db = require("./models");

// const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3001;



app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'public', 'index.html'));
  });
}

app.use(cors()); //react and server communciation for data transfer

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());


// app.use('/', require('./routes'));
app.use(routes);
//create a new post to login
app.post('/login',
  passport.authenticate('local', {
      successRedirect: '/',
      failureRedirect: '/login'
  }
));
// require('./models/Users');
// mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hometohome");

// IMPORTANT: { force: true } when changing data structures and upon initialization; else { force: false }
db.sequelize.sync({ force: true }).then(() => {
  app.listen(PORT, () => {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}! Go to https://localhost:${PORT}`);
  });
})