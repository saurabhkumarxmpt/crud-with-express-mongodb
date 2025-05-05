const express=require('express');
const User=require('../models/User'); // import Schema file
const router=express.Router();


const app=express();
app.use(express.json());

// Insert A User
router.post('/adduser', async(req,res)=>{
    try{
        const users=new User(req.body);
        await users.save(); // data saved on database
        res.json({message:'User save succesfully'});
    }catch(err){
        res.status(500).json({message:err.message});
    }
});

//Find All Users

router.get('/allusers', async(req,res)=>{
        try{
            const users= await User.find();
            res.json(users);
        }catch(err){
            res.status(500).json({"message":err.message});
        };
});


//Find One User by userId

router.get('/find/:id',async(req,res)=>{
    try{
        const userId=parseInt(req.params.id);
        const user=await User.findOne({userId});
        res.json(user);
    }catch(err){
        res.status(500).json({"message":err.message});
    }
});

//Find And Update User

router.put("/update/:id",async(req,res)=>{
    try{
        const userId=parseInt(req.params.id);
        const user=await User.findOneAndUpdate({userId},req.body,{new:true});
        user 
        ? res.json({message:'User Update Succesfully'})
        : res.status(404).json({message:'User not found'});
    }catch(err){
        res.status(500).json({"message":err.message});
    };
});


module.exports=router;