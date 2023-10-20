// dataRoutes.js
const express = require('express');
const router = express.Router();

router.get('/api/data', (req, res) => {
    res.json({ message: 'Hello from Liam and the Express server!' });
});

module.exports = router;
