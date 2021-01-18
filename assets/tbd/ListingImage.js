// module.exports = (sequelize, DataTypes) => {
//     const ListingImage = sequelize.define("ListingImage", {
//         name: { type: DataTypes.STRING, allowNull: false },
//         img: { type: DataTypes.STRING }
//     });

//     ListingImage.associate = db => {
//         ListingImage.belongsTo(db.Listing, { foreignKey: { allowNull: false }});
//     };

//     return ListingImage;
// };