// ini sekali aja manggilnya
require('dotenv').config();

// connect to db
require('./db')();

const express = require('express');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

// middlewares
app.use(express.json());
app.use(cors());

// routers
const notesRouter = require("./routers/notes");
app.use(notesRouter);

app.get('/', (req, res) => {
    res.send('Hello ges');
})

app.listen(port, () => {
    console.log(`Server running: ${port}`);
});
