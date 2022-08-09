const mongoose = require('mongoose')
const Schema = mongoose.Schema

const postSchema = new Schema({
	content: {
		type: String,
		required: true,
	},
	posted:{
		type: Date,
		default: Date.now()
	},
	like: [
		{
			type: String,
			uniqued: true
		}
	],
	username: {
		type: mongoose.Schema.ObjectId,
		ref: 'User',
		required: true,
	}
})

module.exports = mongoose.model("Posts", postSchema)