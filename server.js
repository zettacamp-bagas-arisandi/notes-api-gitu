const express = require('express');
const cors = require('cors');
require('dotenv').config();

const app = express();
const port = 3000;


app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello ges');
})

app.listen(port, () => {
    console.log(`Server running: ${port}`);
});