const express = require('express');
const app =express();

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