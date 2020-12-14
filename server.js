const express = require('express');
const passport = require('passport');
require('dotenv').config();
require('./models/Users');
const cors = require('cors');

const app = express();
require('./config/passport')(passport);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
app.use(cors()); //react and server communciation for data transfer
app.use(passport.initialize());
app.use(passport.session());

app.use('/', require('./routes'));

const PORT = process.env.PORT || 3000;
app.listen(PORT);