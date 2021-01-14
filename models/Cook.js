// const bcrypt = require("bcryptjs"); 
// const LocalStrategy = require("passport-local").Strategy;
// const passport = require("passport");

module.exports = (sequelize, DataTypes) => {
	const Cook = sequelize.define("Cook", {
		// firstName: {
		// 	type: DataTypes.STRING,
		// 	// allowNull: false
		// },
		// lastName: {
		// 	type: DataTypes.STRING,
		// 	// allowNull: false
		// },
		fullName: {
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
		},
	});

	// User.prototype.validatePassword = function (password) {
	// 	// console.log("inside model", password, this);
	// 	return bcrypt.compareSync(password, this.password);
	// };

	// User.addHook("beforeCreate", (user) => {
	// 	user.password = bcrypt.hashSync(user.password, bcrypt.genSaltSync(10), null);
	// });

	Cook.associate = db => {
		Cook.hasMany(db.Listing, { onDelete: "cascade" });
	};

	return Cook;
};