console.log("Synchronous");

const fs = require('fs');
let data = fs.readFileSync('Notes.txt');
console.log(data.toString());
console.log("Srijan");

console.log("Asynchronous")

fs.readFile('Notes.txt',(err, data) => {
    if(err){
        console.log(err);
    }else{
        console.log(data.toString());
    }
});

console.log("Srijan");
