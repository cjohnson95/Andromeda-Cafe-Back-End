const { Decimal128 } = require('mongodb/mongodb');
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const newOrderSchema = new Schema({
name: {type: String, required: true},
description: {type: String, required: true},
price: {type: Decimal128, required: true}
});

module.exports = mongoose.model("New Order", newOrderSchema);