const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    SalePrice: { type: Number },
    productImage: { type: String, required: true },
    category:{ type: mongoose.Schema.Types.ObjectId,ref: "Category" }
});

module.exports = mongoose.model('Product', productSchema);
