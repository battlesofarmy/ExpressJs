
// express.json() --  raw(object) - application/json

const express = require('express');
const app = express();

app.use(express.json());


app.get('/', (req, res)=>{
    res.send(req.body);
})

app.listen(3000, ()=>{
    console.log("Server Running on port: 3000");
});