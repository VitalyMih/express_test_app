import express from 'express'
import mongoose from 'mongoose'
import fileUpload from 'express-fileupload'
import postsRouter from './routes/posts.js'

const PORT = 5001
const DB_URL = 'mongodb+srv://vitalymih:REUE5zVWBAnbW3o4@cluster.mlkhavm.mongodb.net/?retryWrites=true&w=majority'
const app = express()
app.use(express.json())
app.use(express.static('static')) // To get files from static folder
app.use(fileUpload({}))
app.use('/api', postsRouter)

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => console.log(`Server is working on PORT ${PORT}`))
  } catch (error) {
    console.log('Error during connection: ', error)
  }
}

startApp()
