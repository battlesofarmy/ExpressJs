const express = require('express');
const app = express();

app.param('id', (req, res, next, id) => {
    const user = {
        userId : id, 
        name : "Johfa"
    };
    req.userDetails = user;
    next();
})

// Here :id means param. so when compilar got :something it's look for a param function and run that function before move on in this function
app.get('/user/:id',(req, res)=>{
    console.log(req.userDetails);
    res.send("Welcome to app home")
})


app.listen(3000, ()=>{
   console.log('Server is Running in Port: 3000');
});