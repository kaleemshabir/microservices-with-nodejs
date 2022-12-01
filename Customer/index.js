const express = require("express");
const app = express();
const custRouter = require('./customerRouter');
app.use(express.json());
app.use('/customer', custRouter);

app.listen(4000, ()=> {
    console.log('listening ....');
})