const express = require('express');
const app = express();
require('dotenv').config();

const port = process.env.port || 3001;

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`)
});