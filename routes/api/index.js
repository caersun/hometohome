const router = require("express").Router();
const authRoutes = require("./auth");
const userRoutes = require("./users");

// set routes for different api
router.use("/auth", authRoutes); // routes matching "/api/auth"
router.use("/users", userRoutes); // routes matching "/api/users" 

module.exports = router;