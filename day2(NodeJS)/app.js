const http2=require('http2');
let server=http2.createServer();
server.on('stream',(stream,requestHeaders)=>{
    stream.respond({'status':200,
        'Content-Type':"text/plain"});
    stream.end("Welcome Everyone!!");
}).listen(4000);
console.log("Server is running at port 4000");