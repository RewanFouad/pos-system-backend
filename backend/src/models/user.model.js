const mongoose =require("mongoose");
const usersSchema = new mongoose.Schema({

    username:{
        required:true,
        type:String,
        minlength:1
    },
       email:{
        required:true,
        unique:true,
        type:String,
        minlength:1
    },
       password:{
        required:true,
        type:String,
        minlength:1
    },
    role:{
        type:String,
        enum :["cashier","Admin"],
        default:'cashier'
    }


});
const users = mongoose.model("Users",usersSchema);
 module.exports = users;