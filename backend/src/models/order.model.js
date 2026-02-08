const mongoose = require("mongoose");

const orderSchema = new mongoose.Schema({

 items:[{
    product: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"Product",
        required:true
    },
    quantity:{
        type:Number,
        required:true,
    },
    price: {
        type: Number,
        required: true
    }
 }],

 status:{
    type:String,
    enum:["pending","canceled","paid"],
    default:"pending"
 },

 totalPrice:{
    type:Number,
    required:true
 },

 createdBy:{
    type:mongoose.Schema.Types.ObjectId,
    ref:"Users"
 }

}, { timestamps:true });
    module.exports = mongoose.model("Orders",orderSchema);
