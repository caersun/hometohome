module.exports = (sequelize, DataTypes) => {
    const Listing = sequelize.define("Listing", {
        food: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                len: [1]
            }
        },
        price: {
            type: DataTypes.DECIMAL,
            allowNull: false,
        },
        // img: {
        //     type: DataTypes.STRING
        // },
        inStock: {
            type: DataTypes.INTEGER,
            defaultValue: 1
        },
        purchased: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    Listing.associate = db => {
        Listing.belongsTo(db.Cook, { foreignKey: { allowNull: false }});
        Listing.hasOne(db.ListingImage, { onDelete: "cascade" });
    };

    return Listing;
};