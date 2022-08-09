import React ,{useState} from 'react';
import axios from 'axios'
import { useHistory } from 'react-router-dom';
import {useStore, useDispatch} from '../store/Store'
import {fetchApi} from '../Utils/fetchApi'


export const Login = () => {
	const [formLogin, setFormLogin] = useState({username:"",password:""})

	const {user} = useStore()
	const dispatch = useDispatch()

	const history = useHistory()

	const handleChange = (e) =>{
		let newForm = {
			...formLogin,
			[e.target.name]: e.target.value
		}
		setFormLogin(newForm)	
	}

	const handleLogin = async (data) => {
		dispatch({type:"SET_LOADING"})
		if(formLogin.username===""){
			return dispatch({type:"SET_ERROR",payload:"debe ingresar el Username"})
		}
		if(formLogin.password===""){
			return dispatch({type:"SET_ERROR",payload:"debe ingresar el Password"})
		}
		const res = await fetchApi({type:"LOGIN",payload:data})
		if(res.message){
			//return setError(res.message)
		}
		if(res){
			localStorage.setItem("postToken", JSON.stringify({username:data.username,token:res.token}))
			dispatch({type:"SET_USER",payload:{ username:data.username, token:res.token }})
			dispatch({type:"SET_LOADING"})
			history.push("/")
		}
	}

	return (
		<div className="home">
			<div className="form">
				<div className="formHeader" >Sign In</div>
				<div className="content" >
					<input placeholder="Username" value={formLogin.username} name="username" onChange={handleChange} />
					<input placeholder="Password" value={formLogin.password} name="password" onChange={handleChange} type="password"/>
					<button onClick={() => handleLogin(formLogin)} >Login</button>
				</div>
			</div>
		</div>
	)
}