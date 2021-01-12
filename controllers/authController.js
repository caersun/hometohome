const db = require("../models");

const authController = {
    register: (req, res) => {
        console.log("registering req.body", req.body);
        db.User.create({
            fullName: req.body.fullName,
            email: req.body.email,
            password: req.body.password
        }, (err, user) => {
            if (err) {
                console.log(err);
            };
            res.send(user).end();
        })
    },
    login: (req, res) => {
        if (req.user) {
            return res.json(req.user);
        }
        console.log("failed log in :(");
        return res.status(401).json({message: "invalid credentials"});
        // console.log("inside authController login", req.body);
        // req.login();
        // res.json(req.user);
        // req.LogIn();
    },
    logout: (req, res) => {
        req.logout();
        res.send(null);
    },
    getCurrentUser: (req, res) => {
        res.send(req.user);
    }
};

module.exports = authController;