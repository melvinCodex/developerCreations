const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');
const path = require('path');

const app = express();

app.listen(4000, ( ()=> {
    console.log('listening');
}));

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

