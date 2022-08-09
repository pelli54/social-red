import axios from 'axios'

let URI = "http://localhost:4000/api/"

export const fetchApi = async (action, token) => {
	let config = {}
	if(token){
		config = {
			headers: {
				"x-access-token":token
			}
		}
	}
	switch(action.type){
		case "GET_ALL_POST":{
			let res = await axios.get(URI + "post", config)
			return res.data
		}
		case "GET_MY_POST":{
			let res = await axios.get(URI + "mypost", config)
			return res.data
		}
		case "GET_POST_BY":{
			let res = await axios.get(URI + "postbyuser/" + action.payload, config)
			return res.data
		}
		case "GET_ONE_POST":{
			console.log("getone",action)
			let res = await axios.get(URI + "post/" + action.payload, config)
			return res.data
		}
		case "CREATE_POST":{
			let res = await axios.post(URI + "post", action.payload, config)
			return res.data
		}
		case "UPDATE_POST":{
			console.log(config)
			let res = await axios.put(URI + "post/" + action.payload.id, {content:action.payload.content}, config)
			return res.data
		}
		case "DELETE_POST":{
			let res = await axios.delete(URI + "post/" + action.payload, config)
			return res.data
		}
		case "LIKE":{
			let res = await axios.get(URI + "like/" + action.payload, config)
			return res.data
		}
		case "DISLIKE":{
			let res = await axios.get(URI + "dislike/" + action.payload, config)
			return res.data
		}
		case "LOGIN":{
			let res = await axios.post(URI + "users/login", action.payload)
			return res.data
		}
		case "SIGNUP":{
			let res = await axios.post(URI + "users/signup", action.payload)
			return res.data
		}
	}
}