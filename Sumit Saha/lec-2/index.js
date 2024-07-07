const http = require('http');
const server = http.createServer((req, res)=>{
    
    if(req.url === '/'){
        res.write("Home");
        console.log("Welcome to the Home page");
    }else if(req.url === '/about'){
        res.write("About");
        console.log("Welcome to the About Us page");
    }else{
        res.write("404");
        console.log("Page not Found")
    }

    res.end();
});

server.listen(3000, ()=>{
    console.log("Hello World");
});