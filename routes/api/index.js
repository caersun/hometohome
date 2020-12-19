const router = require("express").Router();
const userRoutes = require("./users");

// set routes for different api
router.use("/users", userRoutes); // any routes that match "/api/users" go into here

module.exports = router;