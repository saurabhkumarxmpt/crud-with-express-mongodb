const express=require('express');
const database=require("./database");  //import database connection
const users=require('./routes/users'); // import routes 
const app=express();
const PORT=3000;

app.use(express.json());

database(); // Add Database

app.use('/',users); // add router file 

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