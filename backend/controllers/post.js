const Post = require('../models/Post')

const getAll = async (req,res) => {
	const username = req.userdata
	if(!username){
		return res.status(400).json({ status:400, message:"no user found" })
	}
	try{
		const userPosts = await Post.find().populate("username", "username")
		return res.status(200).json(userPosts)
	}catch(error){
		return res.status(401).json({ status:401, message: error })
	}
}

const getAllByMyUser = async (req,res) => {
	const username = req.userdata
	if(!username){
		return res.status(400).json({ status:400, message:"no user found" })
	}
	try{
		const userPosts = await Post.find({ username: username.id }).populate("username", "username")
		return res.status(200).json(userPosts) 
	}catch(error){
		return res.status(401).json({ status:401, message: error })
	}
}

const getAllByUser = async (req,res) => {
	const username = req.userdata
	if(!username){
		return res.status(400).json({ status:400, message:"no user found" })
	}
	try{
		const userPosts = await Post.find({ username: req.params.id }).populate("username", "username")
		return res.status(200).json(userPosts)
	}catch(error){
		return res.status(401).json({ status:401, message: error })
	}
}

const getOne = async (req, res) => {
	const username = req.userdata
	if(!username){
		return res.status(400).json({ status:400, message:"no user found" })
	}
	try{
		const newPosts = await Post.findOne({ _id: req.params.id }).populate("username", "username")
		return res.status(200).json(newPosts)
	}catch(error){
		console.log(error)
		return res.status(401).json({ status:401, message: error })
	}
	if(!userNotes) {
		res.status(400).json({ status:400, message:"no Note found" })
	}
}

const createPost = async (req,res) => {
	const { content } = req.body
	if(!content){
		return res.status(401).json({ status:401, message:"no content provided" })
	}

	const username = req.userdata
	if(!username){
		return res.status(400).json({ status:400, message:"no user provided" })
	}
	try{
		const newpost = new Post({
			content,
			username: username.id
		})
		const savedata = await newpost.save()
		const savedpost = await Post.find().populate("username", "username")
		return res.status(200).json( savedpost )
	}catch(error){
		console.log(error)
		return res.status(401).json({ status:401, message: error })
	}
	if(!userNotes) {
		res.status(400).json({ status:400, message:"no Note found" })
	}
}

const getOneAndDelete = async (req,res) => {
	const id = req.params.id
	if(!id){
		return res.status(401).json({ status:401, message:"no task provided" })
	}
	try{
		await Post.findByIdAndRemove({ _id: id})
		const savedPosts = await Post.find().populate("username", "username")
		return res.status(200).json(savedPosts)
	}catch(error){
		console.log(error)
		return res.status(401).json({ status:401, message: error })
	}
}

const getOneAndUpdate = async (req,res) => {
	const id = req.params.id
	const { content } = req.body
	if(!id){
		return res.status(401).json({ status:401, message:"no task provided" })
	}
	if(!content){
		return res.status(401).json({ status:401, message:"content is required" })
	}
	try{
		await Post.findByIdAndUpdate({_id: id}, {$set: { content }})
		const allPost = await Post.find().populate("username", "username")
		return res.status(200).json(allPost)
	}catch(error){
		console.log(error)
		return res.status(401).json({ status:401, message: error })
	}
}

const like = async (req,res) => {
	const id = req.params.id
	const username = req.userdata
	if(!id){
		return res.status(401).json({ status:401, message:"no task provided" })
	}
	try{
		let postLiked = await Post.findById({_id: id})
		postLiked.like.push(username.name)
		const result = await Post.findByIdAndUpdate({_id:id}, postLiked)
		const allPost = await Post.find().populate("username", "username")
		return res.status(200).json(allPost)
	}catch(error){
		console.log(error)
		return res.status(401).json({ status:401, message: error })
	}
}

const dislike = async (req,res) => {
	const id = req.params.id
	const username = req.userdata
	if(!id){
		return res.status(401).json({ status:401, message:"no task provided" })
	}
	try{
		let postDisliked = await Post.findById({_id: id})
		let ind = postDisliked.like.indexOf(username.name)
		postDisliked.like.splice(ind,1)
		await Post.findByIdAndUpdate({_id: id}, postDisliked)
		const allPost = await Post.find().populate("username", "username")
		return res.status(200).json(allPost)
	}catch(error){
		console.log(error)
		return res.status(401).json({ status:401, message: error })
	}
}



module.exports = { getAll, getAllByMyUser, getAllByUser, like, dislike, getOne, createPost, getOneAndDelete, getOneAndUpdate }