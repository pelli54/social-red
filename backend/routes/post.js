const express = require('express')
const router = express.Router()
const {
	getAll,
	getAllByMyUser,
	getAllByUser,
	getOne,
	createPost,
	getOneAndDelete,
	getOneAndUpdate,
	like,
	dislike
} = require('../controllers/post')
 
//dar like a una post 
router.get("/like/:id", like)
//obtener todas la publicaciones
router.get("/post", getAll)
//obtener todos los post de mi usuario
router.get("/mypost/", getAllByMyUser)
//obtener todas la post de algun usuario
router.get("/postbyuser/:id", getAllByUser)
//obtener una post en especifico
router.get("/post/:id", getOne)
//crear una nuava post
router.post("/post", createPost)
//eliminar una post por id
router.delete("/post/:id", getOneAndDelete)
//actualizar una post por id
router.put("/post/:id", getOneAndUpdate)
//dar dislike a una post 
router.get("/dislike/:id", dislike)

module.exports = router