const router = require("express").Router();
// const db = require("../../models");
const listingsController = require("../../controllers/listingsController");

// router.post("/add", (req, res) => {
//     db.Listing.create(req.body)
//         .then(dbModel => res.json(dbModel))
//         .catch(err => res.status(500).json(err));
// });

// router.post("/", listingsController.create);

router.route("/")
    .get(listingsController.findAll)
    .post(listingsController.create);

router.route("/cook/:id")
    .get(listingsController.findAllByCook);

router.route("/:id")
    .get(listingsController.findById)
    .put(listingsController.update)
    .delete(listingsController.remove);

module.exports = router;