const express=require('express');
const app=express();
const PORT=3000;

//Add Json middleware 
app.use(express.json());


//Simple Route
app.get("/",(req,res)=>{
    res.json({message:'This is Simple Express Server'});
});


//Listen the server
app.listen(PORT,(err)=>{
    if(err){
        console.error(err.message);
    }else{
        console.log("server in run")
    }
});