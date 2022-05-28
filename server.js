require('dotenv').config();

// ************* Require Modules ****************

const express = require('express');
const mongoose = require('mongoose');
const method = require('method-override');
const session = require('express-session')
const Product = require('./models/Product');
const Cart = require('./models/Cart');

const app = express();

const port = process.env.PORT || 3000;


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

app.use(express.json());



// ************** Routes ****************
// I.N.D.U.C.E.S --> order of writing the routes

// ************** INDEX Route
app.get('/', (req, res) => {
    res.render('LandingPage')
})


app.get('/products', (req, res) => {
    Product.find({}, (err, allProducts) => {
        res.render('BuyerIndex', { product: allProducts });
    })
});

app.get('/cart', (req, res) => {
    Product.find({}, (err, allProducts) => {
        Cart.find({}, (err, allCartItems) => {
            res.render('CartPage', {
                product: allProducts,
                cart: allCartItems
            })
        })
    })
})

app.get('/products/vendor', (req, res) => {
    Product.find({}, (err, allProducts) => {
        res.render('VendorIndex', { product: allProducts });
    })
})


// ************** NEW Route
app.get('/products/new', (req, res) => {
    res.render('New');
})


// ************** DELETE Route
app.delete('/products/:_id', (req, res) => {
    Product.findByIdAndDelete(req.params._id, (err, deleteProduct) => {
        if (!err) {
            res.status(200).redirect('/products/vendor')
        } else {
            res.status(400).json(err)
        }
    })
})


// ************** UPDATERoute
app.put('/products/:id', (req, res) => {
    Product.findByIdAndUpdate(req.params.id, req.body, { new: true }, (err, updatedProduct) => {
        if (!err) {
            // res.send(updatedProduct);
            res.status(200).redirect('/products');
        } else {
            res.status(400).json(err);
        }
    })
})



// ************** CREATE Route
app.post('/products', (req, res) => {
    Product.create(req.body, (err, createdFruit) => {
        res.redirect('/products')
    })
});

app


// ************** EDIT Route
app.get('/products/vendor/:id/edit', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        if (!err) {
            res.render('Edit', { product: foundProduct })
        } else {
            res.status(400).json(err)
        }
    })
})


// ************** SHOW Route

app.get('/products/:id', (req, res) => {
    Product.findById(req.params.id, (err, foundProduct) => {
        res.render('Show', { product: foundProduct });
    })
});

app.get('/products/:id/cart', (req, res) => {
    Product.findById(req.params.id, function (err, product) {
        if (err) {
            res.status(400).json(err);
        } else {
            res.render('CartPage', { product: product, cart: Cart });
        }
    })
})








// Tell the app to listen on port 3000
app.listen(port, () => console.log('Listening in port', port));
