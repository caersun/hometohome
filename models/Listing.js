module.exports = (sequelize, DataTypes) => {
    const Listing = sequelize.define("Listing", {
        title: {
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
        purchased: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    Listing.associate = db => {
        Listing.belongsTo(db.User, { foreignKey: { allowNull: false }});
    }

    return Listing;
}