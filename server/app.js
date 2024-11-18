const express = require('express');
const app = express();
const port = 3000; // Define the port your app will run on

// Middleware to parse incoming JSON requests
app.use(express.json());

// Define a route
app.get('/', (req, res) => {
    res.send('Welcome to my Express.js app!');
});

// Start the server
app.listen(port, () => {
    console.log(`App running at http://localhost:${port}`);
});
