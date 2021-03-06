const db = require("../models");

const listingsController = {
    findAll: (req, res) => {
        db.Listing
            .findAll({ include: db.Cook })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err)); 
    },
    findAllByCook: (req, res) => {
        db.Listing
            .findAll({ where: { CookId: req.params.id }})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: (req, res) => {
        db.Listing.findOne({
            where: { id: req.params.id },
            include: db.Cook
        })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        db.Listing.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: (req, res) => {
        db.Listing.update(req.body, { where: { id: req.params.id } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: (req, res) => {
        db.Listing.destroy({ where: { id: req.listing.id } }) // TODO: Does this work??
            .then(result => res.json({ id: result }))
            .catch(err => res.status(422).json(err));
    }
};

module.exports = listingsController;