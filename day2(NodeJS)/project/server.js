// const express=require('express');
// const app=express();
// app.get('/',(req,res)=>{
//     res.send("Welome to the worl of Express JS");
// });
// app.get("/about",(req,res)=>{
//     res.send("My About Page");
// });

// //try to create routing for products,contact and services ?
// app.get("/products",(req,res)=>{
//     res.send("My Products Page");
// });
// app.get("/contact",(req,res)=>{
//     res.send("My Contact Page");
// });
// app.get("/services",(req,res)=>{
//     res.send("My Services Page");
// });
// app.listen(3000,()=>console.log("server is running at port 3000"));

const express=require('express');
let app=express();
app.use(express.static('public'));
app.get('/index.html',(req,rep)=>{
    res.sendFile(__dirname+ "/" +"index.html");
});
app.get("/srijan",(req,res)=>{
    response={
        first_name:req.query.first_name,
        last_name:req.query.last_name
    }
    console.log(response);
    res.end(JSON.stringify(response));
}).listen(8086,()=>console.log("server is running at port 8086"));