const express = require('express');
const cors = require('cors');
const app = express();

const PORT = process.env.PORT || 3000;

// Enable CORS so frontend can call backend APIs
app.use(cors());

// Simple API endpoint
app.get('/api/message', (req, res) => {
    res.json({ message: 'Hello from Backend API!' });
});

app.listen(PORT, () => {
    console.log(`Backend API running on port ${PORT}`);
});
