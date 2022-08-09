export const initialState = {
	post: [],
	user: {name:"",token:""},
	error: "",
	onEdit:"",
	onProfile: {id:"",name:""},
	loading: false
}

export const storeReducer = (state, action) => {
	switch(action.type){
		case "SET_POST":{
			return {
				...state,
				post: action.payload || []
			}
		}
		case "SET_USER":{
			return {
				...state,
				user: action.payload
			}
		}
		case "SET_ERROR":{
			return {
				...state,
				error: action.payload
			}
		}
		case "SET_ONEDIT":{
			return{
				...state,
				onEdit: action.payload
			}
		}
		case "SET_ONPROFILE":{
			return{
				...state,
				onProfile: action.payload
			}
		}
		case "SET_LOADING":{
			return{
				...state,
				loading: !state.loading
			}
		}
		default:
			return state
	}
}

