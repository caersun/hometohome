const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); //hashes the password 
const jwt = require('jsonwebtoken'); //securely transmits information as JSON object

const UserSchema = new mongoose.Schema({
	fullName: String,
	hash: String,
	email: { type: String, unique: true, lowercase: true, required: [true, "can't be blank"], index: true }
});

UserSchema.methods.validPassword = function (password) {
	return bcrypt.compareSync(password, this.hash);
};

UserSchema.methods.setPassword = function (password) {
	this.hash = bcrypt.hashSync(password, 10);
};

module.exports = mongoose.model('User', UserSchema);

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