const User = require('./userModel');
User.updateOne({
    name:"Srijan Agrawal"
},{email:"srijanagrawal000@gmail.com"})
.then(result=>{
    console.log(result);
})
.catch(error=>{
    console.log(error);
});