const  express = require('express');
const router = express.Router();   // get an instance of the express Router

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message:'Handling GET requests to products'
    });
});

router.post('/',(req,res,next)=>{
    res.status(200).json({
        message:'Handling POST request to products'
    })
});

module.exports =router;