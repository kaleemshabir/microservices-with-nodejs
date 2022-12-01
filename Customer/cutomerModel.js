const mongoose = require("mongoose");

const customerSchema = new mongoose.Schema({
customerId: {type: String, required: true},
customerName: {type: String,required: true},
customerAge: {type: String,required: true},
customerAddress: {type: String, required: true},
});

module.exports = mongoose.model("customer",customerSchema);