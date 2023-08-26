import Post from '../models/Post.js'
import fileService from '../services/files.js'

class PostsServise {
  async index() {
    return await Post.find()
  }

  async show(id) {
    if (!id) {
      throw new Error('id is required!')
    }
    return await Post.findById(id)
  }

  async create(post, picture) {
    const { author, title, content } = post
    const fileName = fileService.save(picture)
    return await Post.create({ author, title, content, picture: fileName })
  }

  async update(id, post) {
    return await Post.findByIdAndUpdate(id, post, { new: true })
  }

  async destroy(id) {
    return await Post.findByIdAndDelete(id)
  }
}

export default new PostsServise()
