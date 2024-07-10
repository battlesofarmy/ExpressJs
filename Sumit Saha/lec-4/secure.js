
const express = require('express');
const app = express();



app.get('/', (req, res)=> {
    res.send(req.secure);
    console.log("Hello World");
})


app.listen(3000, ()=>{
   console.log('Server is Running in Port: 3000');
});