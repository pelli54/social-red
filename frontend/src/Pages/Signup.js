import React ,{useState} from 'react';
import axios from 'axios'
import {useStore, useDispatch} from '../store/Store'
import {fetchApi} from '../Utils/fetchApi'
import { useHistory } from 'react-router-dom';

export const Signup = () => {
	const [formSignup, setFormSignup] = useState({username:"",password:"",passwordC:""})

	const {user} = useStore()
	const dispatch = useDispatch()

	const history = useHistory()

	const handleChange = (e) =>{
		let newForm = {
			...formSignup,
			[e.target.name]: e.target.value
		}
		setFormSignup(newForm)	
	}

	const handleSignup = async (data) => {
		dispatch({type:"SET_LOADING"})
		if(formSignup.username===""){
			return dispatch({type:"SET_ERROR",parload:"debe ingresar el Username"})
		}
		if(formSignup.password===""){
			return dispatch({type:"SET_ERROR",parload:"debe ingresar el Password"})
		}
		if(formSignup.passwordC===""){
			return dispatch({type:"SET_ERROR",parload:"debe confirmar el password"})
		}
		if(formSignup.password!==formSignup.passwordC){
			return dispatch({type:"SET_ERROR",parload:"las contraseñas no coinciden"})
		}
		try{
			const res = await fetchApi({type:"SIGNUP", payload:data})
			if(res){
				//setError("")
				console.log(res)
				localStorage.setItem("postToken", JSON.stringify({ username:data.username, token:res.token }))
				dispatch({type:"SET_USER",payload:{ username:data.username, token:res.token }})
				dispatch({type:"SET_LOADING"})
				history.push("/")
			}
		}catch(error){
			console.log(error)
		}
	}

	return (
		<div className="home">
			<div className="form">
				<div className="formHeader" >Sign Up</div>
				<div className="content" >
					<input placeholder="Username" name="username" value={formSignup.username} onChange={handleChange}/>
					<input placeholder="Password" name="password" value={formSignup.password} onChange={handleChange} type="password"/>
					<input placeholder="Confirm Password" name="passwordC" value={formSignup.paswordC} onChange={handleChange} type="password"/>
					<button onClick={() => handleSignup(formSignup)} >Login</button>
				</div>
			</div>
		</div>
	)
}