const express=require('express');
let app=express();
let bodyParser=require('body-parser');
//It is a middleware that helps to parse incoming form 
//data from req.body
const urlencodedParser=bodyParser.urlencoded({extended:false})
app.use(express.static('public'));
app.get('/index.html',(req,res)=>{
    res.sendFile(__dirname+'/'+"index.html");
});
//handlinng the request
app.post("/srijan",urlencodedParser,(req,res)=>{
    response={
        first_name:req.body.first_name,
        last_name:req.body.last_name
    }
    console.log(response);
    res.end(JSON.stringify(response));
    //res.send(response);
}).listen(8086,()=>console.log("Server is running at port 8086"));