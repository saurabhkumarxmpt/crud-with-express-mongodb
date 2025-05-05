const mongoose=require('mongoose');

const counterSchema=new mongoose.Schema({
    id:{type:String,required: true},
    seq:{type:Number,default: 0}
});

const Counter=mongoose.model('counter',counterSchema);

module.exports=Counter;