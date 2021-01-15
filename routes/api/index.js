const router = require("express").Router();
const authRoutes = require("./auth");
const cookRoutes = require("./cooks");
const listingRoutes = require("./listings");

// set routes for different api
router.use("/auth", authRoutes); // routes matching "/api/auth"
router.use("/cooks", cookRoutes); // routes matching "/api/cooks" 
router.use("/listings", listingRoutes);

module.exports = router;