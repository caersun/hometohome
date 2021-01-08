const bcrypt = require('bcryptjs'); //hashes the password 

module.exports = (sequelize, DataTypes) => {
	const User = sequelize.define("User", {
		firstName: {
			type: DataTypes.STRING,
			allowNull: false
		},
		lastName: {
			type: DataTypes.STRING,
			allowNull: false
		},
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
		hash: {
			type: DataTypes.STRING,
			is: /^[0-9a-f]{64}$/i
		},
		cook: {
			type: DataTypes.BOOLEAN,
			defaultValue: false
		}
	});

	User.prototype.validatePassword = (password) => {
		return bcrypt.compareSync(password, this.hash);
	};

	User.addHook("beforeCreate", (user) => {
		user.hash = bcrypt.hashSync(user.hash, bcrypt.genSaltSync(10), null);
	});

	User.associate = db => {
		User.hasMany(db.Listing, { onDelete: "cascade" });
		// User.hasMany(db.Order, { onDelete: "cascade" });
	};

	return User;
};