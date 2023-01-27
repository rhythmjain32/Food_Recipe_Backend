const express = require('express');
const app = express();

const cors = require("cors");
require("dotenv").config();
require('./database/connection')

const PORT = process.env.PORT || 5000

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cors());
const usersRouter = require("./routes/users");
app.use('/api/user', usersRouter);
const recipeRouter = require("./routes/recipe")
app.use('/api/recipe', recipeRouter);
app.use('/trial', (req, res) => {
    res.send("Welcome to the trial page");
});

app.listen(PORT, (e) => {
    console.log(`running on port http://localhost:${PORT}/`);
})