const router = require("express").Router();
const multer = require("multer");
const cookImageController = require("../../controllers/cookImageController");
const listingImageController = require("../../controllers/listingImageController");

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "./uploads/"); // check back here; will uploads be in root?
    },
    filename: (req, file, cb) => {
        cb(null, new Date().toISOString() + file.originalName);
    }
});

const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === "image/jpeg" || file.mimetype === "image/png") {
        cb(null, true);
    } else {
        cb(null, false);
    };
};

const upload = multer({
    storage: storage,
    limits: { fileSize: 1024 * 1024 * 5 },
    fileFilter: fileFilter
});

//upload.single("productImage"), 

router.route("/cookImage")
    .get(cookImageController.findAll)
    .post(upload.single("productImage"), cookImageController.create);

router.route("/cookImage/cook/:id")
    .get(cookImageController.findByCook);

router.route("/cookImage/:id")
    .get(cookImageController.findById)
    .put(upload.single("productImage"), cookImageController.update)
    .delete(cookImageController.remove);

router.route("/listingImage")
    .get(listingImageController.findAll)
    .post(upload.single("productImage"), listingImageController.create);

router.route("/listingImage/cook/:id")
    .get(listingImageController.findAllByCook);

router.route("/listingImage/:id")
    .get(listingImageController.findById)
    .put(upload.single("productImage"), listingImageController.update)
    .delete(listingImageController.remove);

module.exports = router;