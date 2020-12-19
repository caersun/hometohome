// going to need to seed the database to test in development
const mongoose = require("moongoose");
const db = require("../models");

mongoose.connect(process.env.MONGDB_URI || "mongodb://localhost/hometohome");

const UserSeed = [];

// TODO: Will probably have to add a product seed? When create product model (what user is selling; those will need CRUD?)

db.Users
    .remove({}) // for chaining?
    .then(() => db.Users.collection.insertMany(UserSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0); // exit with success code
    })
    .catch(err => {
        console.log("err in seedDb", err);
        process.exit(1); // exit with failure code
    });