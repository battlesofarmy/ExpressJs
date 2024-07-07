const express = require('express');
const app = express();

// Make the path case sensitive
app.enable('case sensitive routing');
// And you can make it disable
app.disable('case sensitive routing');

// Use .all to use any method (post, get, put)
app.all('/fahim',(req, res)=>{
    res.send("Hello I am all");
    console.log("Hello I am all")
})


app.listen(3000, ()=>{
   console.log('Server is Running in Port: 3000');
});