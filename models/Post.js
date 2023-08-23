import mongoose from 'mongoose'

const schema = new mongoose.Schema({
  author: { type: String, required: true },
  title: { type: String, required: true },
  content: { type: String, required: true },
  picture: String
})

const Post = mongoose.model('Post', schema)

export default Post
