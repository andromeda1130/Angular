const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/product',{
    useNewUrlParser:true,
    useUnifiedTopology:true
});
const db = mongoose.connection;
db.on('error',()=>{
    console.log("Connection failed");
});
db.once('open',()=>{
    console.log("Connection Successfull");
});
module.exports=mongoose;