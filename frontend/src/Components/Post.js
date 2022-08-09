import React, {useState, useEffect} from 'react'
import {useStore, useDispatch} from '../store/Store'
import {fetchApi} from '../Utils/fetchApi'
import { useHistory } from 'react-router-dom';
import Star from '@material-ui/icons/Star' 
import Edit from '@material-ui/icons/Edit' 
import Delete from '@material-ui/icons/Delete' 
import StarBorderOutlined from '@material-ui/icons/StarBorderOutlined' 


export const Post = ({ content, postname, id, like, index }) => {
	const [liked, setLiked] = useState(false)
	const {user, post, onEdit} = useStore()
	const dispatch = useDispatch()

	const history = useHistory()

	const handleDelete = async () => {
		dispatch({type:"SET_LOADING"})
		let newposts = await fetchApi({type:"DELETE_POST", payload:id}, user.token)
		dispatch({type:"SET_POST", payload:newposts})
		dispatch({type:"SET_LOADING"})
	}

	const handleEdit = async () => {
		dispatch({type:"SET_ONEDIT",payload:id})
	}

	const handleLike = async () => {
		dispatch({type:"SET_LOADING"})
		if(!liked){
			let newposts = await fetchApi({type:"LIKE", payload:id}, user.token)
			dispatch({type:"SET_POST", payload:newposts})
			dispatch({type:"SET_LOADING"})
		}
		if(liked){
			let newposts = await fetchApi({type:"DISLIKE", payload:id}, user.token)
			dispatch({type:"SET_POST", payload:newposts})
			dispatch({type:"SET_LOADING"})
		}
	}

	const handleProfile = () => {
		dispatch({type:"SET_ONPROFILE", payload:{id:post[index].username._id, name:postname}})
		history.push("/profile")
	}

	useEffect(() => {
		if(like.some(a => a===user.username)){
			setLiked(true)
		}
		if(!like.some(a => a===user.username)){
			setLiked(false)
		}
	},[post])

	return (
		<div className="card">
			<div className="cardHeader">
			<div className="nameContent">
				<div className="foto"></div>
				<div className="name" onClick={() => handleProfile()}>{postname}</div>
			</div>
			<div className="btnCont">
			{
				postname===user.username?<>
				<button onClick={() => handleDelete()}><Delete/></button>
				<button onClick={() => handleEdit()}><Edit/></button>
				</>:
				<>
				</>
			}
			</div>
			</div>
			<div className="cardContent">
				<div className="content">{content}</div>
				<div className={liked?"liked":"like"}>
					<button onClick={() => handleLike()}>{!liked?<StarBorderOutlined/>:<Star/>}</button>
				</div>
			</div>
		</div>
	)
}