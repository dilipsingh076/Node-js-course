const mongoose = require('mongoose');

const localCollectionNameSchema = new mongoose.Schema({
    name:String,
    model:String,
    brand:String,
    price:Number,
});

module.exports =  mongoose.model("localcollectionnames",localCollectionNameSchema);

