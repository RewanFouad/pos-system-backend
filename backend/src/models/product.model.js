const mongoose = require('mongoose');
 
const productSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        minlength:1
    },
      price:{
        type:Number,
        required:true,
        min:0
    },
      image:{
        type:String,
        required:false,

    },
      category:{
        type:String,
        required:true,
        minlength:1
    },
      barcode:{
        type:String,
        required:false,
        
    },
      quantity:{
        type:Number,
        required:true,
        min:0
    }

})

module.exports = mongoose.model('product',productSchema);








