const mongoose=require('mongoose');
const Counter=require('./counterModel');

const userSchema=new mongoose.Schema({
    userId:{type:Number,unique:true},
    name:String,
    email:String,
    age:Number
});

userSchema.pre('save', async function (next) {
    if (this.isNew) {
        const counter = await Counter.findOneAndUpdate(
            { id: 'userId' },
            { $inc: { seq: 1 } },
            { new: true, upsert: true }
        );
        this.userId = counter.seq;
    }
    next();
});

const User=mongoose.model('users',userSchema);

module.exports=User;