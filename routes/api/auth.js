const router = require("express").Router();
const authController = require("../../controllers/authController");
// const isLoggedIn = require("../../config/middleware/isLoggedIn");
const passport = require("passport");

router.route("/signup").post(passport.authenticate("local-signup"), authController.signup);
router.route("/login").post(passport.authenticate("local-login"), authController.login);
router.route("/logout").get(authController.logout);
// router.route("/user").get(authController.getCurrentUser);

module.exports = router;