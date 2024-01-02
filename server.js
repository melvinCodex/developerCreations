const express = require('express');
const mongoose = require('mongoose');
const multer = require('multer');

const app = express();

mongoose.connect('mongodb://127.0.0.1/portifolio', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(4000, ( ()=> {
    console.log('listening');
}));

const projectSchema = new mongoose.Schema({
    image: {
        data: Buffer,
    },
    name: {
        type: String, 
        required: true
    }
}, {timestamps: true} );

const Project = mongoose.model('Project', projectSchema);

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));
app.use(express.json());

const state = 'active';

app.get('/', (req, res) => {
    res.render('home', {state});
});

app.use((req, res) => {
    res.render('404');
});