const db = require("../models");

const listingImagesController = {
    findAll: (req, res) => {
        db.ListingImage 
            .findAll({ include: [db.Cook, db.Profile] })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findAllByCook: (req, res) => {
        db.ListingImage
            .findAll({ 
                where: { CookId: req.params.id },
                include: [db.Cook, db.Profile]
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    findById: (req, res) => {
        db.ListingImage
            .findOne({
                where: { id: req.params.id },
                include: [db.Cook, db.Profile]
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        db.ListingImage
            .create({
                name: req.body.name,
                img: req.body.path
            })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    update: (req, res) => {
        db.ListingImage
            .update({ 
                name: req.body.name, 
                img: req.body.path 
            }, { where: { id: req.params.id }})
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    remove: (req, res) => {
        db.ListingImage.destroy({ where: { id: req.listingimage.id } })
            .then(result => res.json({ id: result }))
            .catch(err => res.status(422).json(err));
    }
};

module.exports = listingImagesController;