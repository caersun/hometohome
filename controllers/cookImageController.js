// const db = require("../models");

// const cookImagesController = {
//     findAll: (req, res) => {
//         db.CookImage 
//             .findAll({ include: [db.Cook, db.Profile] })
//             .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err));
//     },
//     findByCook: (req, res) => {
//         db.CookImage
//             .findOne({ 
//                 where: { CookId: req.params.id },
//                 include: [db.Cook, db.Profile]
//             })
//             .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err));
//     },
//     findById: (req, res) => {
//         db.CookImage
//             .findOne({
//                 where: { id: req.params.id },
//                 include: [db.Cook, db.Profile]
//             })
//             .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err));
//     },
//     create: (req, res) => {
//         console.log("in cookImageController ~ create ~ req", req);
//         db.CookImage
//             .create({
//                 name: req.body.name,
//                 img: req.body.path
//             })
//             .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err));
//     },
//     update: (req, res) => {
//         db.CookImage
//             .update({ 
//                 name: req.body.name, 
//                 img: req.body.path 
//             }, { where: { id: req.params.id }})
//             .then(dbModel => res.json(dbModel))
//             .catch(err => res.status(422).json(err));
//     },
//     remove: (req, res) => {
//         db.CookImage.destroy({ where: { id: req.cookimage.id } })
//             .then(result => res.json({ id: result }))
//             .catch(err => res.status(422).json(err));
//     }
// };

// module.exports = cookImagesController;