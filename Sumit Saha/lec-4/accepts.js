
const express = require('express');
const app = express();


app.get('/', (req, res)=>{
    
    // Now it's just accepts html
    res.send(req.accepts('html'));
    // Now see what client request to get
    res.send(req.get('accept'));


    console.log("Hello World");
})


app.listen(3000, ()=>{
   console.log('Server is Running in Port: 3000');
});