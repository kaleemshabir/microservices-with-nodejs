const express = require("express");

const router  = express.Router();
const customerController = require('./customerController');
const customer = require('./cutomerModel');

router.post('/', async(req, res) => {
    try {
        const newCustomer = new customer({...req.body});
        customerController.saveCustomer(newCustomer, (err, result)=> {
            if(err) {
                res.status(400).send({'msg': 'Error while saving customer', 'err':err });
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
        customerController.getCustomerById(customer,req.params.id, (err, result)=> {
            if(err) {
                res.status(400).send({'msg': 'Error while fetching customer', 'err':err });
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