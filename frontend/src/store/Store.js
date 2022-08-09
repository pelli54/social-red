import React, { createContext, useContext,useReducer } from 'react'
import { initialState, storeReducer } from './storeReducer'
 
const StoreContext = createContext()


const StoreProvider = ({ children }) => {
	const [state, dispatch] = useReducer(storeReducer, initialState)

	React.useEffect(() => {
		if(localStorage.postToken){
			let user = JSON.parse(localStorage.postToken)
			dispatch({type:"SET_USER",payload:user})
		}
		if(!localStorage.postToken){
			dispatch({type:"SET_USER",payload:{username:"", token:""}})
		}
	},[])


	return (
		<StoreContext.Provider value={[state,dispatch]} >
			{children}
		</StoreContext.Provider>
	)
}

const useStore = () => useContext(StoreContext)[0]
const useDispatch = () => useContext(StoreContext)[1]

export {StoreProvider, StoreContext, useStore, useDispatch}