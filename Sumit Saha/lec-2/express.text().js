
// express.urlencoded() -- x-www-form-urlencoded - application/x-www-form-urlencoded
// (not work with app.all fnc)


const express = require('express');
const app = express();

app.use(express.urlencoded());

app.get('/', (req, res)=>{
    res.send(req.body);
})

app.listen(3000, ()=>{
    console.log("Server Running on port: 3000");
});