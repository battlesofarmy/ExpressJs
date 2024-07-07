
// express.raw()  -- raw(text) - application/octet-stream

const express = require('express');
const app = express();

app.use(express.raw());


app.get('/', (req, res)=>{
    res.send(req.body);

    // BCZ it's return buffer
    console.log(req.body.toString());
})

app.listen(3000, ()=>{
    console.log("Server Running on port: 3000");
});