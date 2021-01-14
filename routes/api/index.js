const router = require("express").Router();
const authRoutes = require("./auth");
const cookRoutes = require("./cooks");

// set routes for different api
router.use("/auth", authRoutes); // routes matching "/api/auth"
router.use("/users", cookRoutes); // routes matching "/api/cooks" 

module.exports = router;