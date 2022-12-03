const express = require("express");

const router  = express.Router();
const productController = require('./productController');
const product = require('./productModel');

router.post('/', async(req, res) => {
    try {
        const newProduct = new product({...req.body});
       productController.saveProduct(newProduct, (err, result)=> {
            if(err) {
                res.status(400).send({'msg': 'Error while saving product', 'err':err });
            }
            else {
                res.status(200).send(result);
            }

        })

        
    } catch (error) {
        res.status(500).send('Internal server error!');
    }
});


router.get('/:id', async(req, res) => {
    try {
        productController.getProductById(product,req.params.id, (err, result)=> {
            if(err) {
                res.status(400).send({'msg': 'Error while fetching product', 'err':err });
            }
            else {
                res.status(200).send(result); 
            }

        })

        
    } catch (error) {
        res.status(500).send('Internal server error!');
    }
});

module.exports = router;