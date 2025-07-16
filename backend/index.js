const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

app.get('/api/ping', (req, res) => {
    res.json({ message: 'pong' });
});

app.listen(port, () => {
    console.log(`Backend escuchando en http://localhost:${port}`);
});
