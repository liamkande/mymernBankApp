const express = require('express');
const app = express();
const port = process.env.PORT || 3001;

// Import the dataRoutes router
const dataRoutes = require('./dataRoutes');

// Mount the dataRoutes
app.use('/', dataRoutes);

app.listen(port, () => {
    console.log(`Express server is running on port ${port}`);
});
