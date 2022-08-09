const axios = require('axios')

let uri = "http://localhost:4000"
let api = "/api/"
let passwGen = "12345678"
let tokenPellii = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDQwMDU3Yjc1M2IzMGU5Y2UyYTAyMyIsInVzZXJuYW1lIjoicGVsbGlpIiwiaWF0IjoxNjQ0NDI5Mzk5LCJleHAiOjE2NDQ1MTM5OTl9.ClAtXO4RPzFp_Y541rSb6mvEGzEF-0JixaVcEW6yYxU'
let tokenJuanito = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYyMDQwMjY0Yjc1M2IzMGU5Y2UyYTAyOSIsInVzZXJuYW1lIjoianVhbml0byIsImlhdCI6MTY0NDQyOTkyNCwiZXhwIjoxNjQ0NTE0NTI0fQ.es36nQK2MyzklxX2a8nNxkWJvovLHv543op97HfkMSc'
let juanitoID = "62040264b753b30e9ce2a029"
let pelliiID = "62040057b753b30e9ce2a023"
let postJuanitoID = "620409d573a6760ef0025e0d"


const init = async () => {
	let res = await axios.get(uri)
	console.log(res.data.message)
}

const login = async (name, pass = passwGen) => {
	let data = {username:name, password:pass}
	let res = await axios.post(uri + api + "users/login", data)
	console.log(res.data)
}

const signup = async (name, pass = passwGen) => {
	let data = {username:name, password:pass, passwordC:pass}
	let res = await axios.post(uri + api + "users/signup", data)
	console.log(res.data)
}

const getAllPost = async (token) => {
	let config = {
		headers: {
			"x-access-token": token
		}
	}
	let res = await axios.get(uri + api + "post", config)
	if(res.data.message){
		return console.log(res.data.message)
	}
	console.log(res.data)
}

const getAllPostMyUser = async (token) => {
	let config = {
		headers: {
			"x-access-token": token
		}
	}
	let res = await axios.get(uri + api + "mypost", config)
	if(res.data.message){
		return console.log(res.data.message)
	}
	console.log(res.data)
}

const getAllPostByUser = async (token, user) => {
	let config = {
		headers: {
			"x-access-token": token
		}
	}
	let res = await axios.get(uri + api + "postbyuser/" + user, config)
	if(res.data.message){
		return console.log(res.data.message)
	}
	console.log(res.data)
}

const crearPost = async (token, content = "contenido general") => {
	let config = {
		headers: {
			"x-access-token": token
		}
	}
	let data = {content}
	let res = await axios.post(uri + api + "post", data, config)
	if(res.data.message){
		return console.log(res.data.message)
	}
	console.log(res.data)
}

const updatePost = async (token, postid, content = "contenido general de editado") => {
	let config = {
		headers: {
			"x-access-token": token
		}
	}
	let data = {content}
	let res = await axios.put(uri + api + "post/" + postid, data, config)
	if(res.data.message){
		return console.log(res.data.message)
	}
	console.log(res.data)
}

const deletePost = async (token, postid) => {
	let config = {
		headers: {
			"x-access-token": token
		}
	}
	let res = await axios.delete(uri + api + "post/" + postid, config)
	if(res.data.message){
		return console.log(res.data.message)
	}
	console.log(res.data)
}

const darLike = async (token, postid) => {
	let config = {
		headers: {
			"x-access-token": token
		}
	}
	let res = await axios.get("http://localhost:4000/api/like/" + postid, {headers: {"x-access-token": token}})
	console.log(res.data)
}

const darDisLike = async (token, postid) => {
	let config = {
		headers: {
			"x-access-token": token
		}
	}
	let res = await axios.get("http://localhost:4000/api/dislike/" + postid, {headers: {"x-access-token": token}})
	console.log(res.data)
}

//init()
//login("pelli1", 12312312)
//signup("juanito")
//getAllPost(tokenPellii)
//getAllPostByUser(tokenPellii, juanitoID)
//getAllPostMyUser(tokenJuanito)
//crearPost(tokenJuanito, "este es el contenido de un post de juanito")
//updatePost(tokenJuanito, postJuanitoID, "este es el contenido que actualice")
//deletePost(tokenJuanito, postJuanitoID)
//darLike(tokenPellii, "620409d573a6760ef0025e0d")
//darDisLike(tokenPellii, '620409d573a6760ef0025e0d')