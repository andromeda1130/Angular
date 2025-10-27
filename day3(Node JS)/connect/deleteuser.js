const User=require('./userModel');
User.deleteOne({name:"Srijan"})
.then(res=>{
    console.log(res);
})
.catch(error=>{
    console.log(error);
});