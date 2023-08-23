import { Router } from 'express'
import postsController from '../controllers/posts.js'

const router = new Router()

router.get('/posts', postsController.index)

router.get('/posts/:id', postsController.show)

router.post('/posts', postsController.create)

router.put('/posts/:id', postsController.update)

router.delete('/posts/:id', postsController.destroy)

export default router
