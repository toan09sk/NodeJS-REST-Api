const mongoose = require('mongoose');

const prductSchema = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: String,
    price: { type: Number, required: true }
});

module.exports = mongoose.model('Product', prductSchema);

/*
required: true --> bắt buộc phải nhập
*/