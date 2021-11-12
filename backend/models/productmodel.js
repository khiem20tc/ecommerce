const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: { type: String, required: true },
    price: { type: Number, required: true },
    quantity: { type: Number, required: true },
    finalPrice: { type: Number },
    productImage: { type: String, required: true },
    category:{ type: mongoose.Schema.Types.ObjectId,ref: "Category" }
});

module.exports = mongoose.model('Product', productSchema);
