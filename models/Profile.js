module.exports = (sequelize, DataTypes) => {
    const Profile = sequelize.define("Profile", {
        specialties: {
            type: DataTypes.STRING,
            allowNull: false,
            defaultValue: "Home Cookin'"
        },
        bio: {
            type: DataTypes.STRING
        },
        location: {
            type: DataTypes.STRING
        },
        cookImgURL: {
            type: DataTypes.STRING
        }
    });

    Profile.associate = db => {
        Profile.belongsTo(db.Cook, { foreignKey: { allowNull: false }});
        // Profile.hasOne(db.CookImage, { onDelete: "cascade" });
    };

    return Profile
}