Use of:
express.router();
express.json() --  raw(object) - application/json
    express.raw()  -- raw(text) - application/octet-stream
    express.text() --  x-www-form-urlencoded - text/plain
    express.urlencoded() -- x-www-form-urlencoded - application/x-www-form-urlencoded
                            (not work with app.all fnc)


const express = require('express');
const app = express();

app.use(express.json());


app.get('/', (req, res)=>{
    console.log(req.body);
    res.send("hello world");
})



express.static(root, [options]): 
app.use(express.static( __dirname +'/public/',{
    index : "love.txt"
}));



