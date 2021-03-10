function isLoggedIn(req, res, next) {
    // console.log("in isLoggedIn(), req", req);
    
    if (req.isAuthenticated()) {
        return next();
    }
    // console.log("in isLoggedIn.js and can't get authenticated");
    // res.send("in isLoggedIn.js; can't get stuff");
};

module.exports = isLoggedIn;