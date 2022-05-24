
// const { urlencoded } = require('express');
// const { links } = require('express/lib/response');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: {type:String, required: true},
    image: {type:Buffer, required: true},
    price: {type: String, required:true},
    quantity: {type: Number, required: true},
    canBuy: {type: Boolean}
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;