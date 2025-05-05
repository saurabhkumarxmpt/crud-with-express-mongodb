const express=require('express');
const User=require('../models/User');
const router=express.Router();


const app=express();

app.use(express.json());

router.post('/adduser', async(req,res)=>{
    try{
        const users=new User(req.body);
        await users.save();
        res.json({message:'User save succesfully'});
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

module.exports=router;