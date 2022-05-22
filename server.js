require('dotenv').config();
// ************* Require Modules ****************
const express = require('express');
const mongoose = require('mongoose');
const method = require('method-override');

const sellProduct = require('./models/SellProduct');
const buyProduct = require('./models/buyProduct');



const app = express();
const port = 3000;


// ************** Engine Setup ****************
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// ************** Connection to Mongoose *****************



// ************** Middleware ****************



// Need Express Middleware to parse JSON



// ************** Routes ****************
// I.N.D.U.C.E.S --> this the order of writing the routes



// Index
app.get('/products', (req,res) => {
    res.render('Index', {buyProduct: buyProduct});
});

app.get('/products/:indexOfbuyProduct', (req,res) => {
    res.render('Show', {buy: buyProduct[req.params.indexOfbuyProduct]} );

})


// Delete


// Update


// Create


// Show



// Tell the app to listen on port 3000
app.listen(port, () => console.log('Listening in port', port));
