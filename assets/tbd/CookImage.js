// module.exports = (sequelize, DataTypes) => {
//     const CookImage = sequelize.define("CookImage", {
//         name: {
//             type: DataTypes.STRING,
//             allowNull: false
//         },
//         img: { type: DataTypes.STRING }
//     });

//     CookImage.associate = db => {
//         CookImage.belongsTo(db.Profile, { foreignKey: { allowNull: false }});
//         // Image.belongsTo(db.Listing, { foreignKey: { allowNull: false }});
//     };

//     return CookImage;
// }