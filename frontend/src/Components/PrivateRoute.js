import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import {useStore} from '../store/Store'


export const PrivateRoute = ({ component: Component, ...rest }) => {
	const {user} = useStore()

	return (
		<Route
			{...rest}
			render={props => {
				const localuser = localStorage.getItem('postToken');
				if(user.username==="" && !localuser) return <Redirect to={{ pathname: '/login' }} />;
				return <Component {...props} />;
			}}
		/>
	)
}