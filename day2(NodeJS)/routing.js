let http=require('http');
http.createServer((request,response)=>{
    console.log(request.url);
    if(request.url=="/"){
        response.write("<h1>Hello user, How are you??</h1>")
        response.end();
    }
    else if(request.url=="/about"){
        response.write("<h1>My About Page</h1>");
        response.end();
    }
    else if(request.url=="/products"){
        response.write("<h1>My Products Page</h1>");
        response.end();
    }
    else if(request.url=="/services"){
        response.write("<h1>My Services Page</h1>");
        response.end();
    }
    else if(request.url=="/contact"){
        response.write("<h1>My Contact Page</h1>");
        response.end();
    }
    else{
        response.write("<h1>Ivalid URL</h1>");
        response.end();
    }
}).listen(8086);
console.log("Server is running at port 8086");