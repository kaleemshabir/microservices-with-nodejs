const express = require("express");
const mongoose = require("mongoose");

const url = 'mongodb://localhost/OrderDb'
const app = express();
mongoose.connect(url, {useNewUrlParser:true});
const connection = mongoose.connection;
connection.on('open', ()=> {
    console.log('connected!');
});
app.use(express.json());