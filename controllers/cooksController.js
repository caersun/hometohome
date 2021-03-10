const db = require("../models");

// defining methods for the cooksController
const cooksController = {
    findAll: (req, res) => {
        db.Cook
            .findAll({ include: [db.Profile, db.Listing] }) 
            // is there a way to sort?
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: (req, res) => {
        db.Cook.findOne({ 
            where: { id: req.params.id },
            include: [db.Profile, db.Listing] 
        })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err)); 
    },
    update: (req, res) => {
        db.Cook.update(req.body, { where: { id: req.params.id } })
            .then((dbModel) => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: (req, res) => {
        db.Cook.destroy({ where: { id: req.user.id } })
            .then(result => res.json({ id: result })) // what's this doing? 
            .catch(err => res.status(422).json(err)); // why not status 401?
    }
};

module.exports = cooksController;