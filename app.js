const express = require('express');
const app =express();

const productRoutes=require('./api/route/product');

// app.use('/',(req,res,next)=>{
//     res.status(200).json({
//         message:"It work!"
//     });
// });

app.use('/products',productRoutes);

module.exports = app;