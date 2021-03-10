const router = require("express").Router();
const authController = require("../../controllers/authController");
const passport = require("passport");

router.route("/signup").post(passport.authenticate("local-signup"), authController.signup);
router.route("/login").post(passport.authenticate("local-login"), authController.login);
router.route("/logout").get(authController.logout);

module.exports = router;