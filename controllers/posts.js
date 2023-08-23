import Post from '../models/Post.js'

class PostsController {
  async index(req, res) {
    try {
      const posts = await Post.find()
      res.json(posts)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async show(req, res) {
    try {
      const { id } = req.params
      if (!id) {
        res.status(400).json({ message: 'id is required' })
      }
      const post = await Post.findById(id)
      res.json(post)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async create(req, res) {
    try {
      const { author, title, content } = req.body
      const post = await Post.create({ author, title, content })
      res.json(post)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params
      const post = req.body
      const updatedPost = await Post.findByIdAndUpdate(id, post, { new: true })
      res.json(updatedPost)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async destroy(req, res) {
    try {
      const { id } = req.params
      await Post.findByIdAndDelete(id)
      res.json({ message: 'Successfull deleted!'})
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

export default new PostsController
