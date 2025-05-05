const mongoose=require('mongoose');

const connectDB= async()=>{
        try{
            await mongoose.connect("mongodb://localhost:27017/myUsers");
            console.log("Database connect");
        }catch(err){
            console.error('somthing is wrong',err.message);
        }
};

module.exports=connectDB;