const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
    name: String,
    description: String,
    shortDescription: String,
    purchasePrice: Number,
    sellingPrice: Number,
    categoryId: { type: mongoose.Schema.Types.ObjectId, ref: 'categories' },
    images:[String]

});

const Product = mongoose.model("products", productSchema);

module.exports = Product;