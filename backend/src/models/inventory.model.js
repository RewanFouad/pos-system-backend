const mongoose = require('mongoose');

const inventorySchema = new mongoose.Schema({

  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Product',
    required: true,
    unique: true   
  },

  quantity: {
    type: Number,
    required: true,
    default: 0
  },

  lowStockAlert: {
    type: Number,
    default: 5
  }

}, { timestamps: true });

module.exports = mongoose.model('Inventory', inventorySchema);
