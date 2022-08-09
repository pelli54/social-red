import React, {useState, useEffect} from 'react'
import {fetchApi} from '../Utils/fetchApi'
import {useStore, useDispatch} from '../store/Store'


export const FormPost = () => {
	const [form, setForm] = useState("")

	const {user, onEdit} = useStore()
	const dispatch = useDispatch()

	const setPostToEdit = async () => {
		dispatch({type:"SET_LOADING"})
		let postToEdit = await fetchApi({type:"GET_ONE_POST", payload:onEdit}, user.token)
		setForm(postToEdit.content)
		dispatch({type:"SET_LOADING"})
	}

	const handleCreate = async () => {
		dispatch({type:"SET_LOADING"})
		if(onEdit===""){
			let newpost = await fetchApi({type:"CREATE_POST", payload:{content:form}}, user.token)
			dispatch({type:"SET_POST",payload:newpost})
			setForm("")
			dispatch({type:"SET_LOADING"})
		}
		if(onEdit!==""){
			let newpost = await fetchApi({type:"UPDATE_POST",payload:{id:onEdit,content:form}}, user.token)
			dispatch({type:"SET_POST", payload:newpost})
			setForm("")
			dispatch({type:"SET_ONEDIT",payload:""})
			dispatch({type:"SET_LOADING"})
		}
	}

	useEffect(() => {
		if(onEdit!==""){
			setPostToEdit()
		}
		if(onEdit===""){
			setForm("")
		}
	},[onEdit])

	return (
		<div className="formPost">
			<input name="content" value={form} onChange={(e) => setForm(e.target.value)} placeholder="Write a Post"/>
			<button onClick={() => handleCreate()} >Post</button>
		</div>
	)
}