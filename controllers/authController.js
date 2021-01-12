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
            console.log("You've logged in, user!");
            return res.json(req.user);
        };
        return res.status(401).json({ message: "invalid credentials" });
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