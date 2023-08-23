import express from 'express'
import mongoose from 'mongoose'
import Post from './models/Post.js'

const PORT = 5001
const DB_URL = 'mongodb+srv://vitalymih:REUE5zVWBAnbW3o4@cluster.mlkhavm.mongodb.net/?retryWrites=true&w=majority'
const app = express()
app.use(express.json())

app.post('/posts', async (req, res) => {
  try {
    const { author, title, content } = req.body
    const post = await Post.create({ author, title, content })
    res.json(post)
  } catch (error) {
    res.status(500).json(error)
  }
})

const startApp = async () => {
  try {
    await mongoose.connect(DB_URL)
    app.listen(PORT, () => console.log(`Server is working on PORT ${PORT}`))
  } catch (error) {
    console.log('Error during connection: ', error)
  }
}

startApp()
