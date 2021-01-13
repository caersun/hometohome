// module.exports = (req, res, next) => {
//     // if the user is logged, continue with request to restricted route
//     if (req.user) {
//         return next();
//     }

//     // if user isn't logged in, return to landing
//     return res.redirect("/");
// }

function isLoggedIn(req, res, next) {
    console.log("in isLoggedIn(), req", req);
    // console.log("in isLoggedIn(), res", res);
    if (req.isAuthenticated()) {
        return next();
    }
    console.log("in isLoggedIn.js and can't get authenticated");
    res.send("in isLoggedIn.js; can't get stuff");
};

module.exports = isLoggedIn;