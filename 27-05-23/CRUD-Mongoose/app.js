const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Employee = require('./models/employee');

//database name - credo
mongoose.connect("mongodb://localhost:27017/credo").then(()=>{
    console.log("connected");
}).catch(()=>{
    console.log("failed");
})

app.use(express.json());

app.post('',async (req,res)=>{
    
    try{
        const result = new Employee({
            firstName:req.body.firstName,
            age:req.body.age,
            salary:req.body.salary,
        })

        //it will return promise
        await result.save();

        res.status(201).json(result);


    }catch(err){
          res.status(400).json({
            err:err
         })
    }
   

})

app.get('',(req,res)=>{

})

app.listen(3000,()=>{
 console.log("server is running");
});