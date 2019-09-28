const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const mongoose = require('mongoose');
// connect to mongodb
mongoose.connect('mongodb://localhost/testdb');
mongoose.Promise = global.Promise;

mongoose.connection.once('open', () => {
    console.log("Ket noi da duoc thuc hien");
}).on('error', () => {
    console.log('Ket noi bi loi', error);
});

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );

    if (req.method === 'OPTION') {
        res.header('Access-Control-Allow-Methods', 'PUT', 'POST', 'PATCH', 'DELETE', 'GET');
        return res.status(200).json({});
    }
    next();
});

const productRoutes = require('./api/route/product');
const orderRoutes = require('./api/route/order');

// app.use('/',(req,res,next)=>{
//     res.status(200).json({
//         message:"It work!"
//     });
// });

app.use('/products', productRoutes);
app.use('/orders', orderRoutes);

module.exports = app;