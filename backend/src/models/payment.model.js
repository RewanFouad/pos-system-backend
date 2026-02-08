const mongoose = require('mongoose');


const paymentSchema = new mongoose.Schema({
    orderr:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Orders",
        required:true
    },
    amount:{
        type: Number,
        required: true 
    },
    method: {
    type: String,
    enum: ['cash', 'card'],
    required: true
  },

  status: {
    type: String,
    enum: ['pending', 'success', 'failed'],
    default: 'pending'
  }
},{ timestamps: true });
module.exports = mongoose.model('payment',paymentSchema);