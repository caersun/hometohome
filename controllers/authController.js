const db = require("../models");

const authController = {
    register: (req, res) => {
        db.User.create({
            fullName: req.body.fullName,
            email: req.body.email,
            hash: req.body.password
        }, (err, user) => {
            if (err) throw err;
            res.send(user).end();
        })
    },
    login: (req, res) => {},
    logout: (req, res) => {},
    getCurrentUser: (req, res) => {}
};

module.exports = authController;