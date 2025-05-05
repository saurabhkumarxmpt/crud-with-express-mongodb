// This code adds an additional "userId" field with auto-incrementing numbers (1, 2, 3, ...)
// because MongoDB's default "_id" is an ObjectId, which is not user-friendly for some use cases
const mongoose=require('mongoose');

const counterSchema=new mongoose.Schema({
    id:{type:String,required: true},
    seq:{type:Number,default: 0}
});

const Counter=mongoose.model('counter',counterSchema);

module.exports=Counter;