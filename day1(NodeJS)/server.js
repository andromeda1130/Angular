const a = require('readline');
const r1=a.createInterface({
    input: process.stdin,
    output: process.stdout,
});

r1.question("What is your favorite Technology ?" ,(answer)=>{
    console.log("tech",answer);
    r1.close();
});
