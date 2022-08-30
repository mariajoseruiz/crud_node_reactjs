import express from 'express'
import { createBlog, deleteBlog, getAllBlogs, getBlog, updateBlog } from '../controllers/BlogController.js'

const router=express.Router()

router.get('/',getAllBlogs) //la ruta raiz es /blogs, localhost:8000/blogs/
router.get('/:id',getBlog) //localhost:8000/blogs/id
router.post('/',createBlog)
router.put('/:id',updateBlog)
router.delete('/:id',deleteBlog)

export default router