const mongoose = require('mongoose')

const Schema = mongoose.Schema;

const userSchema = new Schema(
	{
		username: {
			type: String,
			required: true, 
			unique: true,
			validate: (value) => {
		        const regexp = /^(?=.{6,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/;
		        return regexp.test(value);
		    },
		},
		password: {
			type: String,
			required: true,
		},
	},
	{tiemstamps: true},
)

module.exports = mongoose.model("User", userSchema)