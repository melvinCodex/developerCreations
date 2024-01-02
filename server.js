const express = require('express');
const { result } = require('lodash');
const mongoose = require('mongoose');
const path = require('path');
const app = express();

mongoose.connect('mongodb://127.0.0.1/ballingston', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.listen(3000, () => {
    console.log('listening');
})
app.set('view engine', 'ejs');

const imageSchema = new mongoose.Schema({
    title: {
        type: String, 
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    } 
}, {timestamps: true} );
  
const Image = mongoose.model('Image', imageSchema);
  

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));

app.get('/', async (req, res) => {

    await Image.find()
        .then((result) => {
            res.status(200).render('index', { images: result });
        })
        .catch((err) => {
            console.log(err);
        });
});

app.get('/about',(req, res) => {
    res.render('about');
});

app.get('/blogs/create', (req, res) => {
    res.render('addImage');
});

app.get('/gallery/:id', (req, res) => {
    const id = req.params.id;
    if(mongoose.Types.ObjectId.isValid(id)){
        Image.findById(id)
            .then(result => {
                console.log(result);
                res.render('details' ,{ image : result});
            })
            .catch((err) => {
                console.log(err);        
            })
    }
    else{
        console.log(err);
    }
});


app.delete('/gallery/:id', (req, res) => {
    const id = req.params.id;

    Image.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/'});
        })
        .catch(err => console.log(err));
});

app.post('/blogs/create', (req, res) => {
    const imagesave = new Image(req.body);

    imagesave.save()
        .then((result) => {
            res.redirect('/');
        })
        .catch((err) => {
            console.log(err);
        });
});

app.use((req, res) =>{
    res.render('404');
});