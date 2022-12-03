const express = require("express");
const { default: mongoose } = require("mongoose");

const router  = express.Router();
const order = require('./orderModel');
const axios = require('axios');
require('../dbconfig/dbfile');


router.post('/', async(req, res) => {
    try {
        const newOrder = new order({
            customerId: mongoose.Types.ObjectId(req.body.customerId),
            productId: mongoose.Types.ObjectId(req.body.productId),     
        });
     let data =  await newOrder.save();
     if(data)
     res.status(200).send('Success');

        
    } catch (error) {
        console.log("error:", error);
        res.status(500).send('Internal server error!');
    }
});


router.get('/:id', async(req, res) => {
    try {
      
        order.findById(req.params.id).then((order)=> {

            if(order) {

                axios.get(`http://localhost:4000/customer/${order.customerId}`).then(response => {

                let orderObject= {
                    CustomerName: response.data.customerName,

                }

                axios.get(`http://localhost:3000/product/${order.productId}`).then(response => {
                    orderObject.ProductName= response.data.productName,
                    orderObject.ProductDetails = response.data.productDetails

                    console.log('in order', orderObject);
                    res.json(orderObject);
                })
                
                })
            }else {
                res.status(400).send('Order not found!')
            }
        })

        
    } catch (error) {
        res.status(500).send('Internal server error!');
    }
});

module.exports = router;