import React, {useState, useEffect} from 'react'
import {Post} from './Post'
import {FormPost} from './FormPost'
import {Loading} from './Loading'
import {fetchApi} from '../Utils/fetchApi'
import {useStore, useDispatch} from '../store/Store'

export const Home = () => {
	const [form, setForm] = useState("")

	const {post, user, loading} = useStore()
	const dispatch = useDispatch()

	const getpost = async () => {
		let posts = await fetchApi({type:"GET_ALL_POST"}, user.token)
		dispatch({type:"SET_POST", payload:posts})
	}

	useEffect(() => {
		dispatch({type:"SET_LOADING"})
		getpost()
		dispatch({type:"SET_LOADING"})
	},[user])

	return (
		<div className="home">
			{loading?<Loading/>:<></>}
			<div className="container">
				<FormPost/>
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
	)
}