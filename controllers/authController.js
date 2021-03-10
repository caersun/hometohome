// const db = require("../models");

const authController = {
    signup: (req, res) => {
        if (req.user) {
            req.flash("successMsg", "You've signed up");
            console.log("You've signed up, user!");
            return res.json(req.user);
        }
        return res.json({ message: "could not log in" });
    },
    login: (req, res) => {
        if (req.user) {
            req.flash("successMsg", "You're already logged in");
            console.log("You're logged in, user!");
            return res.json(req.user);
        };
        return res.status(401).json({ message: "invalid credentials" })
    },
    logout: (req, res) => {
        req.logout();
        req.flash("successMsg", "You successfully logged out");
        res.json({ message: "You have logged out." });
    }
};

module.exports = authController;