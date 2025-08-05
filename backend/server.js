const express = require('express');
const path = require('path');
const app = express();

const PORT = process.env.PORT || 3000;

// Serve frontend static files
app.use('/', express.static(path.join(__dirname, '../frontend')));

// Simple API endpoint
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from Backend API!' });
});

// Fallback route (simplified to root)
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../frontend/index.html'));
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
