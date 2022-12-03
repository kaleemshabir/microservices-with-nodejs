const mongoose = require("mongoose");

const orderschema = new mongoose.Schema({
customerId: {type: mongoose.SchemaTypes.ObjectId, required: true},
productId: {type: mongoose.SchemaTypes.ObjectId,required: true},
});

const Order = mongoose.model("order",orderschema);
module.exports = Order;