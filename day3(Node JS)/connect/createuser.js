const User = require('./userModel');
const newUser = new User({
    name:"Srijan",
    email:"srijan@accenture.com",
    age:23
});
newUser.save()
.then(user=>{
    console.log("user Created successfully",user);
})
.catch(error=>{
    console.log(error);
});
