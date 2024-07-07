const express = require('express');
const app = express();

// Without this, req.body return undefine
// app.use(express.json());

app.get('/',(req, res)=>{
    console.log(req.body);
    res.send("Hello World");
})


app.listen(3000, ()=>{
    console.log("Server running on port: 3000");
});