const { Post } = require('../models');

const postData = [{
        title: 'Post 1',
        content: 'This is a post',
        user_id: 1

    },
    {
        title: 'Post 2',
        content: 'This is another post',
        user_id: 2
    },
    {
        title: 'Post 3',
        content: 'Oh look! Yet another post',
        user_id: 3
    }
];

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;