const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); //hashes the password 
// const jwt = require('jsonwebtoken'); //securely transmits information as JSON object

const UserSchema = new mongoose.Schema({
	fullName: String,
	hash: String, 
	email: {type: String, unique: true, lowercase: true, required: [true, "can't be blank"], index: true}
});

UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.hash);
};

UserSchema.methods.setPassword = function (password) {
    this.hash = bcrypt.hashSync(password, 10);
};

module.exports = mongoose.model('Users', UserSchema);