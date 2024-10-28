const express = require('express');
const app = express();

// Root route to handle "/"
app.get('/', (req, res) => {
    res.send('Server is running. Go to /auth/callback to test the callback route.');
});

// Define the callback route
app.get('/auth/callback', (req, res) => {
    const authorizationCode = req.query.code;

    if (authorizationCode) {
        console.log(`Authorization Code: ${authorizationCode}`);
        res.send('Authorization code received. You can close this window.');
    } else {
        res.send('Authorization code not provided.');
    }
});

// Start the server
const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
