// dataRoutes.js
const express = require('express');
const router = express.Router();
router.use(express.json());

router.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Liam and the Express server!' });
});

// New route for creating a user account
router.post('/api/register', (req, res) => {
    const { name, email, password } = req.body;

    res.json({
        message: 'User registered successfully',
        name,
        email,
        password,
    });
});

module.exports = router;
