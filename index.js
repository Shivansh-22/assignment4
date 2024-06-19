// Import the express module
const express = require('express');

// Create an Express application
const app = express();

// Define a port
const port = 3000;

// Middleware to log the request method and URL
app.use((req, res, next) => {
  console.log(`${req.method} request for '${req.url}'`);
  next();
});

// Route for the root URL
app.get('/', (req, res) => {
  res.send('Hello, world!');
});

// Route for a different endpoint
app.get('/about', (req, res) => {
  res.send('About us page');
});

// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
