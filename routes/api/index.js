const router = require("express").Router();
const authRoutes = require("./auth");
const cookRoutes = require("./cooks");
const listingRoutes = require("./listings");
const profileRoutes = require("./profile");
const imageRoutes = require("./images");

router.use("/auth", authRoutes); // routes matching "/api/auth"
router.use("/cooks", cookRoutes); // routes matching "/api/cooks" 
router.use("/listings", listingRoutes); // routes matching "/api/listings"
router.use("/profile", profileRoutes); // routes matching "/api/profile"
router.use("/images", imageRoutes); // routes matching "/api/images"

module.exports = router;