const express = require("express");
const app = express();
const orderRouter = require('./orderRouter');
app.use(express.json());
app.use('/order', orderRouter);

app.listen(2000, ()=> {
    console.log('listening ....');
})