const express = require('express');
const router = express.Router();
router.use(express.json());

// Simulated user data (for demonstration purposes)
const users = [
    { email: 'user1@example.com', password: 'password1' },
    { email: 'liamkande@icloud.com', password: '123456' },
];

// Route for creating a user account
router.post('/api/users/signup', (req, res) => {
    const { name, email, password } = req.body;

    // In a real application, you would save user data to a database.

    res.json({
        message: 'User registered successfully',
        name,
        email,
        password,
    });
});

// Route for user login
router.post('/api/users/login', (req, res) => {
    const { email, password } = req.body;

    // In a real application, you would perform user authentication and validation here.
    // For this example, we'll simply check if the provided credentials match any user in our simulated data.

    const user = users.find((u) => u.email === email && u.password === password);

    if (user) {
        // Authentication successful
        res.json({ message: 'Login successful', user: { email } });
    } else {
        // Authentication failed
        res.json({ message: 'Invalid credentials' });
    }
});

module.exports = router;
