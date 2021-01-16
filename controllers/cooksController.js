// const { request } = require("express");
const db = require("../models");

// defining methods for the cooksController
const cooksController = {
    // findAll: (req, res) => {
    //     console.log("req.query in usersController findAll method", req.query);
    //     db.Cook
    //         .find(req.query)
    //         .sort({ date: -1 })
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    findAll: (req, res) => {
        // console.log("in cooksController ~ findAll ~ req", req);
        db.Cook
            // is this how to include Listing?
            .findAll({ include: { model: db.Listing } })
            // is there a way to sort?
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // findById: (req, res) => {
    //     console.log("req.params.id in findById method", req.params.id);
    //     db.Cook
    //         .findById(req.params.id)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    findById: (req, res) => {
        db.Cook.findOne({ 
            where: { id: req.params.id },
            include: { model: db.Listing }
        })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // probably never need to call route since cooks are creating with registration
    // create: (req, res) => {
    //     console.log("req.body in create method", req.body);
    //     db.Cook
    //         .create(req.body)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    // update: (req, res) => {
    //     console.log("finding user id: " + req.params.id + "and updating", req.body);
    //     db.Cook
    //         .findByIdAndUpdate({ _id: req.params.id }, req.body)
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // },
    update: (req, res) => {
        db.Cook.update(req.body, { where: { id: req.params.id } })
            .then(dbModel => res.json(dbModel))
            .catch(err => res.status(422).json(err));
    },
    // remove: (req, res) => {
    //     console.log("deleting user id: " + req.params.id);
    //     db.Cook
    //         .findById({ _id: req.params.id })
    //         .then(dbModel => dbModel.remove())
    //         .then(dbModel => res.json(dbModel))
    //         .catch(err => res.status(422).json(err));
    // }
    remove: (req, res) => {
        db.Cook.destroy({ where: { id: req.user.id } })
            .then(result => res.json({ id: result })) // what's this doing? why not like ln 63?
            .catch(err => res.status(422).json(err)); // why not status 401?
    }
};

module.exports = cooksController;