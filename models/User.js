const mongoose=require('mongoose');
const Counter=require('./counterModel'); // import couter file 

const userSchema=new mongoose.Schema({
    userId:{type:Number,unique:true},
    name:String,
    email:String,
    age:Number
});


// This section automatically increments the "userId" field using the counter model.
// The counter is defined in a separate file and helps create a user-friendly, auto-incrementing ID
// in addition to MongoDB's default ObjectId.

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