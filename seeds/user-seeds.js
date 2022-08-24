const { User } = require('../models');

const userData = [{
        username: 'Nate',
        password: 'blah1'

    },
    {
        username: 'Tony',
        password: 'blah2'
    },
    {
        username: 'Drew',
        password: 'blah3'
    }
];

const seedUsers = () => User.bulkCreate(userData);

module.exports = seedUsers;