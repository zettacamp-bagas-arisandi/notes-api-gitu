// ini sekali aja manggilnya
require('dotenv').config();

// import function connectToDB
const connectToDB = require('./db');

// run function connectToDB
connectToDB();

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

app.get('/', (req, res) => {
    res.send('Hello ges');
})

app.listen(port, () => {
    console.log(`Server running: ${port}`);
});
