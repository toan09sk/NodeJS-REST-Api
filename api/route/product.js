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

router.get('/:productId',(req,res,next)=>{
    const id = req.params.productId;

    if(id==='special'){
        res.status(200).json({
            message:'your discovered the special ID'
        });
    }
    else{
        res.status(200).json({
            message:'you passed an ID'
        });
    }
});

router.patch('/:productId',(req, res, next)=> {
    res.status(200).json({
        message:'Update product'
    });
});

router.delete('/:productId', (req, res, next) => {
    res.status(200).json({
        message: 'Deleted product'
    })
});

module.exports =router;