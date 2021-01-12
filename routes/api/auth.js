const router = require("express").Router();
const authController = require("../../controllers/authController");
const passport = require("passport");

router.route("/register").post(authController.register);
router.route("/login").post(passport.authenticate("local"), authController.login);
router.route("/current").get(authController.getCurrentUser);
router.route("/logout").get(authController.logout);

module.exports = router;