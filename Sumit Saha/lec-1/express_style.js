const express = require('express');
const app = express();

app.get('/',(req, res)=>{
    res.send("Home Page")
})
app.get('/about',(req, res)=>{
    res.send("About Page")
})

// How to make not found page ? don't know :)


app.listen(3000,()=>{
    console.log("Server Running on port 3000");
})