const express = require('express');
const mongoose = require('mongoose');
const Product = require('../models/product');
const router = express.Router(); // get an instance of the express Router

router.get('/', (req, res, next) => {
    Product.find()
        .exec()
        .then(docs => {
            console.log(docs);
            if (docs.length >= 0) {
                res.status(200).json(docs);
            } else {
                res.status(404).json({
                    message: 'No entries found'
                });
            }
            res.status(500).json(docs);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

router.post('/', (req, res, next) => {

    const productMongoose = new Product({
        _id: new mongoose.Types.ObjectId(),
        name: req.body.name,
        price: req.body.price
    });

    productMongoose.save().then(result => {
            console.log(result);
            res.status(201).json({
                message: 'Handling POST request to products',
                createdProduct: result
            });
        })
        .catch(err => {
            console.log(err);
            res.status(200).json({ error: err })
        });
});

router.get('/:productId', (req, res, next) => {
    const id = req.params.productId;

    Product.findById(id).exec()
        .then(doc => {
            console.log("From database", doc);
            if (doc) {
                res.status(500).json(doc);
            } else {
                res.status(404).json({ message: 'No valid entry found for provide ID' });
            }

            res.status(500).json(doc);
        })
        .catch(err => {
            console.log(err);
            res.status(200).json({ error: err })
        });
});

router.patch('/:productId', (req, res, next) => {
    const id = req.params.productId;
    const updateOps = {};
    for (const ops of req.body) { //expected array-----request body [{"propName":"name","value":"Harry Potter 6"}] localhost:3000/products/5d8f78e66f14c2603479e531
        updateOps[ops.propName] = ops.value;
    };

    Product.update({ _id: id }, { $set: updateOps })
        .exec()
        .then(result => {
            console.log(result);
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        })

});

router.delete('/:productId', (req, res, next) => {
    const id = req.params.productId;
    Product.remove({ _id: id })
        .exec()
        .then(result => {
            res.status(200).json(result);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({
                error: err
            });
        });
});

module.exports = router;