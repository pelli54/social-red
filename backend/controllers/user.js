const User = require('../models/user')
const Bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const dotenv = require('dotenv')

dotenv.config()

const login = async (req,res) => {
	const {username, password} = req.body
	if(!username) return res.status(400).json({message:"username no provided"})
	if(username.length<6) return res.status(400).json({message:"username invalid"})
	if(!password) return res.status(400).json({message:"password no provided"})
	try{
		const userRecord = await User.findOne({ username })
		if(userRecord){
			if(Bcrypt.compareSync(password, userRecord.password)){
				const token = await jwt.sign({id: userRecord._id, username},
					process.env.API_KEY,
					{expiresIn: 84600}
				)
				return res.status(201).json({ token })
			}
			return res.status(401).json({
				status:401,
				message:"username and password no match"
			})
		}
		if(!userRecord){
			return res.status(401).json({message:"user no found"})
		}
	}catch(error){
		return res.status(400).json({
			status: 400,
			message: error
		})
	}
}

const signup = async (req, res) => {
	const { password, passwordC, username } = req.body;
	
	if(!username) return res.status(400).json({message:"username no provided"})
	if(username.length<6) return res.status(400).json({message:"username invalid"})
	if(!password) return res.status(400).json({message:"password no provided"})
	if(!passwordC) return res.status(400).json({message:"password confirmation no provided"})
	if(password !== passwordC) return res.status(400).json({message:"passwords mo match"})

	if(password === passwordC){
		const newUser = User({
			password: Bcrypt.hashSync(password, 10),
			username,
		})
		let existUser = await User.findOne({ username })
		if(!existUser){
			try{
				const savedUser = await newUser.save()
				const token = await jwt.sign({
					id: savedUser._id, username},
					process.env.API_KEY,
					{expiresIn: 84600}
				)
				return res.status(201).json({ token })
			} 
			catch(error) {
				console.log(error)
				return res.status(401).json({ status: 401, message: error })
			}
		}
		return res.status(400).json({ message:"username invalid" })
	}
}

module.exports = {signup, login}