const db = require("../models");

const profileController = {
    findAll: (req, res) => {
        db.Profile
            .findAll({ include: [db.Cook] })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findByCook: (req, res) => {
        db.Profile.findOne({ 
            where: { CookId: req.params.id },
            include: [db.Cook]
        })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: (req, res) => {
        db.Profile.findOne({
            where: { id: req.params.id },
            include: [db.Cook]
        })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        db.Profile.create(req.body)
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: (req, res) => {
        db.Profile.update(req.body, { where: { id: req.params.id }})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: (req, res) => {
        db.Profile.destroy({ where: { id: req.profile.id } })
            .then(result => res.json({ id: result }))
            .catch(err => res.status(422).json(err));
    }
};

module.exports = profileController;