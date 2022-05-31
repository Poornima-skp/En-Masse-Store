
// const { urlencoded } = require('express');
// const { links } = require('express/lib/response');
const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: { type: String, required: true },
    // image: { type: Buffer, required: true },
    image: {type:String, required: true},
    price: { type: String, required: true },
    quantity: { type: Number, required: true },
    productDescription: {
        type: String, required: true
    },
    sellerName: { type: String, required: true },
    rating: { type: Number },
    reviews: { type: Number }
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product;