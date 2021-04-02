module.exports = (sequelize, DataTypes) => {
	const Cook = sequelize.define("Cook", {
		firstName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true
			}
		},
		password: {
			type: DataTypes.STRING,
			allowNull: false
		}
	});

	Cook.associate = db => {
		Cook.hasOne(db.Profile, { onDelete: "cascade" });
		Cook.hasMany(db.Listing, { onDelete: "cascade" });
	};

	return Cook;
};