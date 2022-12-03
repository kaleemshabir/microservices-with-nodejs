const express = require("express");
const app = express();
const productRouter = require('./productRouter');
app.use(express.json());
app.use('/product', productRouter);

app.listen(3000, ()=> {
    console.log('listening ....');
})