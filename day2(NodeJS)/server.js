const http=require('http');
http.createServer((request,response)=>{
    response.writeHead(200,{'Contact-Type':'text/plain'});
    response.write("Welcome to the world of Node JS");
    response.end();
}).listen(8086);
console.log("Server is running at port 8086");