const mongoose=require('mongoose');

const userSchema=new mongoose.Schema({
    userId:{type:Number,unique:true},
    name:String,
    email:String,
    age:Number
});

const User=mongoose.model('users',userSchema);

module.exports=User;