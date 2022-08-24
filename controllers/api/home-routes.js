const sequelize = require('../../config/connection');
const { Post, User } = require('../../models');
const router = require('express').Router();

router.get('/', (req, res) => {
  Post.findAll({
    attributes: [
      'id',
      'title',
      'content',
      'created_at'
    ],
  }).then(dbPost => {
    const posts = dbPost.map(post => post.get({ plain: true }));
    res.render('homepage', { posts, loggedIn: req.session.loggedIn });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    res.redirect('/');
    return;
  }
  res.render('login');
});

router.get('/register', (req, res) => {
  res.render('register');
});

router.get('/post/:id', (req, res) => {
  Post.findOne({
    where: {
      id: req.params.id
    },
    attributes: [
      'id',
      'content',
      'title',
      'created_at'
    ],
  }).then(dbPost => {
    if (!dbPost) {
      res.status(404).json({ message: 'There is no post with this id' });
      return;
    }
    const post = dbPost.get({ plain: true });
    console.log(post);
    res.render('single-post', { post, loggedIn: req.session.loggedIn });
  }).catch(err => {
    console.log(err);
    res.status(500).json(err);
  });
});

module.exports = router;