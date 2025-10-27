const User = require('./userModel');
User.find()
.then(user=>{
    console.log("Users Details",user);
})
.catch(error=>{
    console.log(error);
});