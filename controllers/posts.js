import postsService from '../services/posts.js'

class PostsController {
  async index(req, res) {
    try {
      const posts = await postsService.index()
      res.json(posts)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async show(req, res) {
    try {
      const post = await postsService.show(req.params.id)
      res.json(post)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async create(req, res) {
    try {
      const post = await postsService.create(req.body, req.files.picture)
      res.json(post)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async update(req, res) {
    try {
      const updatedPost = await postsService.update(req.params.id, req.body)
      res.json(updatedPost)
    } catch (error) {
      res.status(500).json(error)
    }
  }

  async destroy(req, res) {
    try {
      await postsService.destroy(req.params.id)
      res.json({ message: 'Successfull deleted!'})
    } catch (error) {
      res.status(500).json(error)
    }
  }
}

export default new PostsController()
