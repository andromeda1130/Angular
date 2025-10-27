const fs=require('fs');
fs.writeFile("Welcome.txt","We are learning about Node JS",(err)=>{
    if(err){
        console.log(err);
    }
    console.log("data written successfully");
    console.log("reading DATA");
    fs.readFile("Welcome.txt",(err,data)=>{
        if(err){
            console.log(err);
        }
        else{
            console.log(data.toString());
        }
    });
});