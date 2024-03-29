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
        },
        delivers: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    Profile.associate = db => {
        Profile.belongsTo(db.Cook, { foreignKey: { allowNull: false }});
    };

    return Profile
}