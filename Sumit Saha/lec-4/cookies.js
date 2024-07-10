// npm i cookie-parser
// Exptra Work 
// const cookieParser = require('cookie-parser');
// app.use(cookieParser());


const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');

app.use(cookieParser());

app.get('/', (req, res)=> {
    res.send(req.cookies);
    console.log("Hello World");
})


app.listen(3000, ()=>{
   console.log('Server is Running in Port: 3000');
});