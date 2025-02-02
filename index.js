const express = require('express');
const path = require('path');
const fs = require('fs'); 
const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/timeline', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'timeline.html'));
});




app.get('/contact', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'contact.html'));
});

app.post('/submit-contact', (req, res) => {
 
    res.redirect('/contact');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});