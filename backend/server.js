const express = require('express');
const app = express();
const cors = require('cors');

// Serve static files from the "public" directory inside the "frontend" folder
app.use(express.static('frontend/public'));
app.use(cors());

// Define your routes and other middleware here

// Start the server
app.listen(3001, () => {
    console.log('Server is running on port 3001');
});
