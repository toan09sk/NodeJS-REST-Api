const bodyParse = require('body-parse');
const express = require('express');
const app =express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const productRoutes=require('./api/route/product');
const orderRoutes = require('./api/route/order');

// app.use('/',(req,res,next)=>{
//     res.status(200).json({
//         message:"It work!"
//     });
// });

app.use('/products',productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;