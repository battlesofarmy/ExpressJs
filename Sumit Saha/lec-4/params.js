const express = require('express');
const app = express();


app.param('id',(req, res, next, id)=>{
    const user = {
        name : "Johfa",
        herId : id
    }
    req.details = user;

    next();
})

app.get('/user/:id',(req, res) => {
    // res.send("Thanks");
    res.send(req.details);
    console.log("It's Work");
})

app.listen(3000, ()=>{
   console.log('Server is Running in Port: 3000');
});