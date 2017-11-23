const express = require('express');
const path = require('path');
// Create Express Application
const app = express();
const publicPath = path.join(__dirname, '..', 'public');

// Tell it to use the public dir to serve up our files
app.use(express.static(publicPath));

// if not in public folder give them back html
app.get('*', (req, res) => {
    res.sendFile(path.join(publicPath, 'index.html'));
});

// serves it up on localhost:3000
app.listen(3000, () => {
    console.log('Server is up!');
});