const express = require('express');
const router = express.Router();

const { checkJwt } = require('../controllers/auth');
const { getBlogs, getBlogById, getBlogBySlug, createBlog, updateBlog, getBlogsByUser } = require('../controllers/blog');

router.get('', getBlogs);
router.get('/me', checkJwt, getBlogsByUser);
router.get('/:id', getBlogById);
router.get('/s/:slug', getBlogBySlug);

router.post('/create', checkJwt, createBlog);
router.patch('/:id', checkJwt, updateBlog);

module.exports = router;
