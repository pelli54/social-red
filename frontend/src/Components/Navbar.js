import React ,{useContext} from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import {useStore, useDispatch} from '../store/Store'


export const Navbar = () => {

	const {user} = useStore()
	const dispatch = useDispatch()

	const history = useHistory()

	const handleLogout = () => {
		localStorage.removeItem("postToken")
		dispatch({type:"SET_USER",payload:{username:"",token:""}})
	}

	const handleMyprofile = () => {
		dispatch({type:"SET_ONPROFILE",payload:{name:user.username, id:""}})
		history.push("/profile")
	}

	return (
		<div className="navbar">
			<NavLink exact to="/">
				<div className="logo" >SOCIAL POSTER</div>
			</NavLink>
			<div className="buttonBox" >
				{
					user.username!==""?<>
						<span onClick={() => handleMyprofile()}>hola {user.username}</span>
						<span onClick={() => handleLogout()}>LogOut</span>
					</>:
					<>
						<NavLink exact to="/login">
							<span>Login</span>
						</NavLink>
						<NavLink exact to="/signup">
							<span>Signup</span>
						</NavLink>
					</>
				}
			</div>
		</div>
	)
}