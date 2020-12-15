const express = require("express");
const session = require("express-session");

const mongoose = require("moongoose");
const routes = require("./routes");
const app = express();
const PORT = process.env.PORT || 3000;
const passport = require('passport');

const cors = require('cors');
('dotenv').config();
// require('./config/passport')(passport);

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

// not sure what this line is doing?
app.use(cors()); //react and server communciation for data transfer

app.use(passport.initialize());
app.use(passport.session());

// app.use('/', require('./routes'));
app.use(routes);

// require('./models/Users');
mongoose.connect(process.env.MONGODB_URI || "mongod://localhost/hometohome");

app.listen(PORT, function () {
  console.log(`🌎  ==> API Server now listening on PORT ${PORT}! Go to https://localhost:${PORT}`);
});