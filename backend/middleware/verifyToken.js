const jwt = require('jsonwebtoken')
const User = require('../models/user')
const dotenv = require('dotenv')

dotenv.config()

module.exports = async (req, res, next) => {
	let token = req.headers["x-access-token"];
	if (!token) return res.status(403).json({ message: "No Token provided" });
	try {
	    const decoded = await jwt.verify(token, process.env.API_KEY);
	    req.userId = decoded.id;
	    const user = await User.findById(req.userId)
	    req.userdata = {name:user.username, id: user._id}

	    if (!user){
	    	console.log("err verify token: User no Found")
			return res.status(404).json({message: 'No user found'});
		}
		
	    next();
	} catch (error) {
		console.log(error)
	    return res.status(401).send({ message: error });
	}
}