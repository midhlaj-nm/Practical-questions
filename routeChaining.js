const express = require('express');
const app = express();

app.route('/user')
    .get((req, res) => res.send('Get user data'))
    .post((req, res) => res.send('Create a new user'))
    .delete((req, res) => res.send('Delete user'));

app.listen(3000, () => console.log('Server running on port 3000'));
