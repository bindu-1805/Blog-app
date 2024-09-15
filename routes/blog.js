const express = require('express');
const router = express.Router();

let posts = []; // Temporary store for posts

// Route to display all posts
router.get('/', (req, res) => {
  res.render('index', { posts });
});

// Route to create a new post
router.get('/new-post', (req, res) => {
  res.render('new-post');
});

// Handle form submission to create a new post
router.post('/new-post', (req, res) => {
  const { title, content } = req.body;
  posts.push({ title, content, date: new Date().toLocaleString() });
  res.redirect('/');
});

// View a single post
router.get('/post/:id', (req, res) => {
  const postId = req.params.id;
  const post = posts[postId];
  if (post) {
    res.render('post', { post, id: postId });
  } else {
    res.status(404).send('Post not found');
  }
});

module.exports = router;

