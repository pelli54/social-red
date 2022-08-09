import React,{useState, useEffect} from 'react';
import {fetchApi} from '../Utils/fetchApi'
import {useStore, useDispatch} from '../store/Store'
import {Post} from './Post'

export const Profile = () => {
	const [profile, setProfile] = useState("")

	const {post, user, onProfile} = useStore()
	const dispatch = useDispatch()

	const getmypost = async () => {
		let posts = await fetchApi({type:"GET_MY_POST"}, user.token)
		dispatch({type:"SET_POST", payload:posts})
	}

	const getpost = async () => {
		let posts = await fetchApi({type:"GET_POST_BY", payload:onProfile.id}, user.token)
		dispatch({type:"SET_POST", payload:posts})
	}

	useEffect(() => {
		if(onProfile.name===""){
			setProfile(user.username)
			getmypost()
		}
		if(onProfile.name===user.username){			
			setProfile(user.username)
			getmypost()
		}
		if(onProfile.name!==user.username && onProfile.name!==""){
			setProfile(onProfile.name)
			getpost()
		}
	},[user])

	return (
		<div className="home">
			<div className="container">
				<div className="profile">
					<div className="pic"></div>
					<div className="detail">
						<div className="label">Username:</div>
						<div className="name">{profile}</div>
					</div>
				</div>
				<div className="container">
					<div className="title">{onProfile.name===user.username?"My Posts":"Post"}</div>
					<div className="cardContain">
					{
						post.length===0?
						<h2>No post</h2>:
						post.map((a,i) => (
							<Post 
								key={a._id} 
								content={a.content} 
								postname={a.username.username} 
								id={a._id}
								like={a.like}
								index={i} 
							/>
						))
					}
					</div>
				</div>
			</div>
		</div>
	)
}