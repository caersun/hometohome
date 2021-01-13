// const db = require("../models");

const authController = {
    signup: (req, res) => {
        if (req.user) {
            req.flash("successMsg", "You're already logged in");
            console.log("You've signed up");
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
    },
    // getCurrentUser: (req, res) => {
    //     if (req.user) {
    //         req.flash("successMsg", "You're logged in");
    //         return res.json(req.user);
    //     };
        // console.log("what's on req?", req);
        // console.log("why doesn't req.user show up??? it's in sessions?");
        // console.log("in req.sessionStore", req.sessionStore.sessions);
        // console.log("what's on res?", res);
    //     return res.send("can't find shit!!!!");
    // },
};

module.exports = authController;