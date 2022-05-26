require('dotenv').config();
// ************* Require Modules ****************
const express = require('express');
const mongoose = require('mongoose');
const method = require('method-override');

const Product = require('./models/Product');



const app = express();
const port = 3000;


// ************** Engine Setup ****************
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// ************** Connection to Mongoose *****************
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.once('open', () => console.log('Connected to Mongo'));


// ************** Middleware ****************
app.use(method('_method'));

app.use(express.urlencoded({ extended: false }));
app.use(express.static('public'));


// Need Express Middleware to parse JSON
app.use(express.json());




// ************** Routes ****************
// I.N.D.U.C.E.S --> this the order of writing the routes



// Index
app.get('/', (req,res) =>{
    res.render('LandingPage')
})


app.get('/products', (req, res) => {
    Product.find({}, (err, allProducts) => {
        res.render('BuyerIndex', { product: allProducts });
    })
});

app.get('/products/seller', (req,res) => {
    Product.find({}, (err, allProducts) => {
        res.render('SellerIndex', { product: allProducts });
    })
})

app.get('/products/:id/buy', (req, res) => {
    Product.findById(req.params.id, (err, selectProduct) => {
        res.render('Buy', {product: selectProduct})
    })
    
})



// New
app.get('/products/new', (req, res) => {
    res.render('New');
})

// Delete


// Update


// Create
app.post('/products', (req, res) => {
    Product.create(req.body, (err, createdFruit) => {
        res.redirect('/products')
    })
});


// Edit
app.get('/products/seller/:id/edit', (req,res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        if(!err){
            res.render('Edit')
        } else {
            res.status(400).json(err)
        }
    })
})


// Show

app.get('/products/:id', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        res.render('Show', { product: foundProduct });
    })
});








// Tell the app to listen on port 3000
app.listen(port, () => console.log('Listening in port', port));
