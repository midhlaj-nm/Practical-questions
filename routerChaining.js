const express = require('express');
const app = express();
const router = express.Router();

// Middleware to parse JSON
app.use(express.json());

// Router chaining for "/users"
router.route('/users')
    .get((req, res) => res.send('GET all users'))
    .post((req, res) => res.send('Create a user'))
    .put((req, res) => res.send('Update all users'));

// Using the router under "/api"
app.use('/api', router);

// Start the server
app.listen(3000, () => {
    console.log('Server running on port 3000');
});
