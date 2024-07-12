const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

app.get('/', (req, res) => {
    res.render('home');
});

app.use((req, res) => {
    res.render('404');
});

