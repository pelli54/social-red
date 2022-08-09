const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const morgan = require('morgan')
const verifyToken = require('./middleware/verifyToken')
const dotenv = require('dotenv')

const user = require('./routes/user')
const post = require('./routes/post')

dotenv.config()

const PORT = process.env.PORT || 4001

app.use(cors({credentials: true, origin: 'http://localhost:3000'}))
app.use(express.json())
app.use(morgan("dev"))


//rutas
app.use('/api/users', user)
app.use('/api/', verifyToken, post)

app.get("/", (req,res) => {
	return res.status(200).json({ message:"hola mundo" })
})

mongoose
  .connect("mongodb://localhost:27017/mydb", { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true, useFindAndModify: false })
  .then(() => console.log("MongoDB successfully connected"))
  .catch((err) => console.log(err));

app.listen(PORT || 4000, () => {
	console.log(`server on port ${PORT}`)
})