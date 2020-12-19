const router = require("express").Router();
const userRouter = require("./users");

// set routes for different api
router.use("/users", require("./users")); // any routes that match "/api/users" go into here

module.exports = router;