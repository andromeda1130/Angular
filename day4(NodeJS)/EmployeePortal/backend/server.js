const express=require('express');
const mongoose=require('mongoose');
const bodyParser=require('body-parser');
const cors=require('cors');

const app=express();
app.use(cors());
app.use(bodyParser.json());
mongoose.connect('mongodb://localhost:27017/testing',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const Employee=mongoose.model('Employee',{
    empid:String,
    name:String,
    project:String
});
app.post('/employee',(req,res)=>{
    const empdata=req.body;
    const employee=new Employee(empdata);
    employee.save()
    .then(()=>{
        res.status(201).json({message:"Employee Added Successfully"});
    })
    .catch(error=>{
        console.log(error);
    });
});
app.get('/getemployee',async(req,res)=>{
    try{
        const employees=await Employee.find();
        res.json(employees);
    }catch(error){
        console.log("Error in reading employees data",error);
        res.status(500).json({message:"Internal Server Error"});
    }
})
app.listen(3000,()=>
    console.log("Server is running at port 3000"));