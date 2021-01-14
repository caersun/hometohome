const db = require("../models");

// defining methods for the cooksController
const cooksController = {
    findAll: (req, res) => {
        console.log("req.query in usersController findAll method", req.query);
        db.Cook
            .find(req.query)
            .sort({ date: -1 })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: (req, res) => {
        console.log("req.params.id in findById method", req.params.id);
        db.Cook
            .findById(req.params.id)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        console.log("req.body in create method", req.body);
        db.Cook
            .create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: (req, res) => {
        console.log("finding user id: " + req.params.id + "and updating", req.body);
        db.Cook
            .findByIdAndUpdate({ _id: req.params.id }, req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: (req, res) => {
        console.log("deleting user id: " + req.params.id);
        db.Cook
            .findById({ _id: req.params.id })
            .then(dbModel => dbModel.remove())
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    }
};

module.exports = cooksController;